<template>
    <tfoot>
    <tr>
        <td>new:</td>
        <!-- Для каждого столбца таблицы выводим соответствующее поле ввода getCurrentTable.columns-->
        <td v-for="column in getCurrentColumns()"
            v-bind:key="column.name"
        >
            <!-- Если поле только для чтения просто показываем без ввода -->
            <span v-if="column.readonly">
                        {{ getNewRowField(column) }}
                    </span>

            <!-- Иначе-если поле-ссылка на ключ другой таблицы - делаем выбор по значеням соответств. таблицы-->
            <div v-else-if="column.link">
                <!-- Если массив картинок -->
                <ViewLinkImages v-if="column.link.imageField && getNewRow[column.name]"
                                v-bind:images="column.linkList[getNewRow[column.name]].image"
                >
                </ViewLinkImages>
                <select v-model="$store.state.newRow[getCurrentTable.name][column.name]">
                    <option v-for="(value, key) of column.linkList"
                            v-bind:key="key"
                            v-bind:value="key"
                    >
                        {{ value.value }}
                    </option>
                </select>
            </div>

            <!-- Иначе если поле Image -->
            <div v-else-if="column.type === 'image'"
                 class="image-list"
            >
                <!-- При редактировании, показываем фотки только если не выбраны новые getFooterImageArr(column)-->
                <div v-if="!imagesFiles[column.name] || imagesFiles[column.name].length === 0">
                    <ViewLinkImages v-bind:images="getNewRow[column.name]"
                                    v-bind:close-image="onCloseImage(column.name)"
                    >
                    </ViewLinkImages>
                </div>
                <!-- Выбираем новые фотки -->
                <div class="input-files">
                    <input type="file"
                           v-on:change="onChangeFiles"
                           v-bind:multiple="column.array"
                           v-bind:data-column-name="column.name"
                    />
                    <!-- Очистить выбор -->
                    <button v-on:click="clearInputFiles(column.name)"
                            v-if="imagesFiles[column.name] && imagesFiles[column.name].length > 0"
                            title="Очистить выбор"
                    >X
                    </button>
                </div>
                <!-- Показываем выбранные файлы-фотки -->
                <img v-for="(file, index) of imagesFiles[column.name]"
                     v-bind:key="index"
                     v-bind:src="file2Src(file)"
                     v-on:click="$store.dispatch('viewImage', file2Src(file))"
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
            <button v-on:click="clearNewRow"
                    title="Очистить строку ввода"
            >
                Очист.
            </button>
        </td>
    </tr>
    </tfoot>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import request from '../request'
import ViewLinkImages from './VueLinkImages'

export default {
  components: {
    Vue,
    ViewLinkImages
  },
  name: 'ViewTableFooter',
  data () {
    return {
      imagesInput: {},
      imagesFiles: {},
      imagesArray: {}
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentTable',
      'getNewRow'
    ])
  },
  methods: {
    // oncloseImage
    onCloseImage (columnName) {
      return (imageId) => {
        this.$store.dispatch('delNewRowImage', { columnName, imageId })
        console.log(columnName, imageId)
      }
    },

    // Возвращаем список полей текущей таблицы + готовим объект images
    getCurrentColumns () {
      for (let column of this.getCurrentTable.columns) {
        if (column.type === 'image' && !this.imagesFiles[column.name]) {
          Vue.set(this.imagesFiles, [column.name], [])
          Vue.set(this.imagesInput, [column.name], HTMLInputElement)
          Vue.set(this.imagesArray, [column.name], false)
        }
      }
      return this.getCurrentTable.columns
    },

    // Очистить Input Files
    clearInputFiles (columnName) {
      this.imagesInput[columnName].value = ''
      this.imagesFiles[columnName] = []
      this.imagesArray[columnName] = false
    },

    // Возвращает src для файла
    file2Src (file) {
      return window.URL.createObjectURL(file)
    },

    // Обработка выбранных файлов
    onChangeFiles (ev) {
      const el = ev.srcElement
      let warning = ''
      let columnName = el.dataset.columnName
      this.imagesFiles[columnName] = []
      this.imagesInput[columnName] = el
      for (let i = 0; i < el.files.length; i++) {
        // Проверяем, что файл - картинка маленького размера
        if (el.files[i].type.includes('image') && el.files[i].size < 1050000) {
          this.imagesFiles[columnName].push(el.files[i])
        } else {
          if (!el.files[i].type.includes('image')) {
            warning += el.files[i].name + ' - не картинка, '
          } else {
            warning += el.files[i].name + ' - слишком большой, '
          }
        }
      }
      if (warning) {
        warning = 'Для загрузки изображений не подходят файлы: ' + warning
        this.$store.dispatch('showStatusBar', warning)
      }
    },

    // Название кнопки - Сохранить/Изменить
    buttonName: function () {
      return (this.getNewRow && this.getNewRow['_id']) ? 'Изм.' : 'Доб.'
    },

    // Сохраняем строку newRow в таблицу на сервер
    rowPutPost: function () {
      const table = this.getCurrentTable
      const newRow = this.getNewRow
      const isFile = true
      let err = ''

      // Проверка корректности ввода данных по всем полям
      table.columns.forEach(column => {
        // Проверяем обязательные поля на заполнение
        if (!column.readonly && column.required && !newRow[column.name]) {
          if (!err) err = 'Не заполнено обязательное поле:'
          err += ' ' + column.name
        }
      })
      // Если есть ошибки, показываем их и выходим
      if (err) {
        return this.$store.dispatch('showStatusBar', err)
      }

      // Готовим данные для загрузки на сервер
      let promises = [] // Промисы для загрузки картинок
      let imageColumnNames = [] // Список названий полей с картинками
      let rowImages = {} // Объект с результатами загруженных картинок для включения в newRow

      // Готовим картинки в соответствующих полях
      table.columns.forEach(column => {
        // Если поле картинок, готовим промис (картинки грузим на сервер и получаем от сервера их ID
        if (column.type === 'image' && this.imagesFiles[column.name] && this.imagesFiles[column.name].length > 0) {
          let fd = new FormData()
          this.imagesFiles[column.name].forEach(file => {
            fd.append('file', file)
          })
          const promise = request('POST', this.$store.state.serverURL + 'images/', fd, isFile)
          promises.push(promise)
          imageColumnNames.push(column.name)
        }
      })

      // Если есть картники, сначала грузим их на сервер и получаем массив их id
      if (promises.length > 0) {
        Promise.all(promises)
          .then(res => {
            // Сохраняем массив картинок в соответствующем поле rowImages
            for (let i = 0; i < imageColumnNames.length; i++) {
              rowImages[imageColumnNames[i]] = res[i].res
            }
            Object.assign(newRow, rowImages)
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
      for (let columnName in this.imagesFiles) {
        this.imagesFiles[columnName] = []
        this.imagesInput[columnName].value = ''
        this.imagesArray[columnName] = false
      }
      this.getCurrentTable.columns.forEach(column => {
        this.$store.state.newRow[this.getCurrentTable.name][column.name] = null
      })
    },

    // Поле только для чтения
    getNewRowField: function (column) {
      const row = this.getNewRow
      if (!row[column.name]) return '' // Пустое поле
      // Если поле-указатель, то возвращаем соответствующее значение
      if (column.link && column.linkList && column.linkList[row[column.name]]) {
        return column.linkList[row[column.name]].value || 'not found :('
      }
      if (column.type === 'date') {
        return (row[column.name] + '').slice(0, 10)
      }
      return row[column.name]
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

    input[type="file"]
        font-size: xx-small;

    td
        background-color antiquewhite
        border brown 1px solid

    img
        width: 5em
        height: 5em
        margin: 2px

    img:hover
        cursor move

    div.image
        display inline-block;
        position relative;

    div.image-list
        display table-caption

    div.input-files
        display inline-flex
</style>
