<template>
    <tfoot>
    <tr>
        <td>new:</td>
        <!-- Для каждого столбца таблицы выводим соответствующее поле ввода -->
        <td v-for="column in getCurrentTable.columns"
            v-bind:key="column.name"
        >
            <!-- Поле только для чтения -->
            <span v-if="column.readonly">
                        {{ getNewRowField(column) }}
                    </span>
            <!-- Поле-ссылка на ключ другой таблицы -->
            <select v-else-if="column.link"
                    v-model="$store.state.newRow[getCurrentTable.name][column.name]"
            >
                <option v-for="(value, key) of column.linkList"
                        v-bind:key="key"
                        v-bind:value="key"
                >
                    {{ value }}
                </option>
            </select>
            <!-- Поле Image -->
            <div v-else-if="column.type === 'image'"
                 class="image"
            >
                <img v-for="src of getImageSrcArr(column)"
                     v-bind:src="'images/' + src"
                />
                <input type="file"
                       v-on:change="onChangeFiles"
                       v-bind:multiple="column.array"
                />
                <img v-for="file of images.files"
                     v-bind:src="file2Src(file)"
                />
            </div>
            <!-- Обычное текстовое поле -->
            <input v-else-if="column.type !== 'textarea'"
                   v-bind:type="column.type"
                   v-model="$store.state.newRow[getCurrentTable.name][column.name]"
                   v-bind:title="column.about_column ? column.about_column : column.name"
            />
            <!-- Поле типа Textarea -->
            <textarea v-else
                      v-model="$store.state.newRow[getCurrentTable.name][column.name]"
                      v-bind:title="column.about_column ? column.about_column : column.name"
            ></textarea>
        </td>
        <td>
            <!-- Кнопка Сохранить/Изменить -->
            <button v-on:click="rowPutPost">
                {{ buttonName() }}
            </button>
            <!-- Кнопка Очистить -->
            <button v-on:click="clearNewRow">
                Очист.
            </button>
        </td>
    </tr>
    </tfoot>
</template>

<script>
import { mapGetters } from 'vuex'
import request from '../request'

export default {
name: 'ViewTableFooter',
data () {
  return {
    images: {
      input: HTMLInputElement,
      files: [],
      columnName: '',
      array: false
    }
  }
},
computed: {
  ...mapGetters([
    'getCurrentTable',
    'getNewRow'
  ])
},
methods: {
  // Возвращает src для файла
  file2Src (file) {
    return window.URL.createObjectURL(file)
  },

  // Обработка выбранных файлов
  onChangeFiles (ev) {
    let warning = ''
    this.images.files = []
    this.images.input = ev.srcElement
    for (let i = 0; i < ev.srcElement.files.length; i++) {
      // Проверяем, что файл - картинка маленького размера
      if (ev.srcElement.files[i].type.includes('image') && ev.srcElement.files[i].size < 1050000) {
        this.images.files.push(ev.srcElement.files[i])
      } else {
        warning += ev.srcElement.files[i].name + ', '
      }
    }
    if (warning) {
      warning = 'Для загрузки изображений не подходят файлы: ' + warning
      this.$store.dispatch('showStatusText', warning)
    }
  },

  // Ввозвращаем массив путей к картинкам
  getImageSrcArr (column) {
    if (column.array) this.images.array = true
    this.images.columnName = column.name
    let images = this.getNewRow[column.name]
    if (images instanceof Array) return images
    if (images) return [images]
    return []
  },

  // Название кнопки - Сохранить/Изменить
  buttonName: function () {
    return (this.getNewRow && this.getNewRow['_id']) ? 'Изм.' : 'Доб.'
  },

  // Сохраняем строку таблицы
  rowPutPost: function () {
    const table = this.getCurrentTable
    const newRow = this.getNewRow
    let err = ''
    table.columns.forEach(column => { // Проверяем обязательные поля на заполнение
      if (!column.readonly && column.required && !newRow[column.name]) {
        if (!err) err = 'Не заполнено обязательное поле:'
        err += ' ' + column.name
      }
    })
    // Если есть ошибки, показываем их и выходим
    if (err) {
      return this.$store.dispatch('showStatusText', err)
    }

    // Если есть картники, сначала грузим их на сервер и получаем массив их id
    if (this.images.files.length > 0) {
      let fd = new FormData()
      this.images.files.forEach(file => {
        fd.append('file', file)
      })
      const isFile = true //'multipart/form-data; charset=utf-8'
      request('POST', this.$store.state.serverURL + 'images/', fd, isFile)
        .then(res => {
          // Сохраняем массив картинок в соответствующем поле
          newRow[this.images.columnName] = res.res
          this.sendNewRow(newRow)
        })
        .catch(err => {
          console.dir(err)
        })
    // Если нет картинок, сразу переходим к следующему этапу
    // Этап сохранения записи в Коллекцию
    } else {
      this.sendNewRow(newRow)
    }
  },

  // Отправляем запись на сервер
  sendNewRow: function (newRow) {
    if (newRow._id) { // Если запись существует - перезаписать
      this.$store.dispatch('putRow', newRow)
        .then(this.clearNewRow)
    } else { // Иначе новая запись
      this.$store.dispatch('postRow', newRow)
        .then(this.clearNewRow)
    }
  },

  // Очистить строку ввода
  clearNewRow: function () {
    this.$store.state.newRow[this.getCurrentTable.name]._id = null
    this.images.files = []
    this.images.input.value = ""
    this.getCurrentTable.columns.forEach(column => {
      this.$store.state.newRow[this.getCurrentTable.name][column.name] = null
    })
  },

  // Поле только для чтения
  getNewRowField: function (column) {
    if (column.type === 'date' && this.getNewRow[column.name]) {
      return String(this.getNewRow[column.name]).slice(0, 10)
    } else {
      return this.getNewRow[column.name]
    }
  }
}
}
</script>

<style scoped lang="stylus">
    tr, textarea
        vertical-align bottom

    textarea
        width calc(100% - 6px)

    input[type="number"]
        width 6em

    td
        background-color antiquewhite
        border brown 1px solid

    img
        width: 5em
        height: 5em

    div.image
        display: table-caption
</style>
