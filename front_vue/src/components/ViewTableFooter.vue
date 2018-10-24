<template>
    <tfoot>
    <tr>
        <td>new:</td>
        <!-- Для каждого столбца таблицы выводим соответствующее поле ввода -->
        <td v-for="column in getCurrentTable.columns"
            v-bind:key="column.name"
        >
            <!-- Поле только для чтения просто показываем без ввода -->
            <span v-if="column.readonly">
                        {{ getNewRowField(column) }}
                    </span>

            <!-- Поле-ссылка на ключ другой таблицы - делаем выбор по значеням соответств. таблицы-->
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
                 class="image-list"
            >
                <!-- При редактировании, показываем фотки только если не выбраны новые getFooterImageArr(column)-->
                <div v-if="images.files.length === 0">
                    <!-- Если массив фото -->
                    <div v-if="column.array">
                        <div v-for="(src, index) of $store.state.newRow[getCurrentTable.name][column.name]"
                             class="image"
                        >
                            <img v-bind:src="'images/' + src"/>
                            <div v-on:click="$store.state.newRow[getCurrentTable.name][column.name].splice(index, 1)"
                                 class="image-close"
                            >X
                            </div>
                        </div>
                    </div>
                    <!-- Если одиночное(не массив) фото-->
                    <div v-else-if="$store.state.newRow[getCurrentTable.name][column.name]">
                        <div class="image">
                            <img v-bind:src="'images/' + $store.state.newRow[getCurrentTable.name][column.name]"/>
                            <div v-on:click="$store.state.newRow[getCurrentTable.name][column.name].splice(index, 1)"
                                 class="image-close"
                            >X
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Выбираем новые фотки -->
                <div class="input-files">
                    <input type="file"
                           v-on:change="onChangeFiles"
                           v-bind:multiple="column.array"
                    />
                    <!-- Очистить выбор -->
                    <button v-on:click="clearInputFiles"
                            v-if="images.files.length > 0"
                    >X
                    </button>
                </div>
                <!-- Показываем выбранные фотки -->
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
      // Очистить Input Files
      clearInputFiles () {
        this.images.input.value = ''
        this.images.files = []
      },

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

      // Название кнопки - Сохранить/Изменить
      buttonName: function () {
        return (this.getNewRow && this.getNewRow['_id']) ? 'Изм.' : 'Доб.'
      },

      // Сохраняем строку таблицы
      rowPutPost: function () {
        const table = this.getCurrentTable
        const newRow = this.getNewRow
        let err = ''
        let imageColumnName = ''
        table.columns.forEach(column => {
          if (column.type === 'image') imageColumnName = column.name
          // Проверяем обязательные поля на заполнение
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
              newRow[imageColumnName] = res.res
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
        this.images.input.value = ''
        this.getCurrentTable.columns.forEach(column => {
          this.$store.state.newRow[this.getCurrentTable.name][column.name] = null
        })
      },

      // Поле только для чтения
      getNewRowField: function (column) {
        const row = this.getNewRow
        if (!row[column.name]) return '' // Пустое поле
        // Если поле-указатель, то возвращаем соответствующее значение
        if (column.link && column.linkList) {
          return column.linkList[row[column.name]] || 'not found :('
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

    td
        background-color antiquewhite
        border brown 1px solid

    img
        width: 5em
        height: 5em

    div.image
        display inline-block;
        position relative;

    .image-close
        position absolute
        top 2px
        right 2px
        width 1em
        height 1em
        background bisque
        opacity 0.4

    .image-close:hover
        opacity 1
        cursor pointer

    div.image-list
        display table-caption

    div.input-files
        display inline-flex
</style>
