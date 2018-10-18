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
                        <option v-for="option in column.linkList"
                                v-bind:key="option.key"
                                v-bind:value="option.key"
                                >
                        {{ option.value }}
                        </option>
                    </select>
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

export default {
  name: 'ViewTableFooter',
  computed: {
    ...mapGetters([
      'getCurrentTable'
    ])
  },
  methods: {
    // Название кнопки - Сохранить/Изменить
    buttonName: function () {
      return (this.$store.state.newRow[this.getCurrentTable.name] && this.$store.state.newRow[this.getCurrentTable.name]['_id']) ? 'Изм.' : 'Доб.'
    },
    // Сохраняем строку таблицы
    rowPutPost: function () {
      const table = this.getCurrentTable
      const newRow = this.$store.state.newRow[table.name]
      let err = ''
      table.columns.forEach(column => { // Проверяем обязательные поля на заполнение
        if (!column.readonly && !newRow[column.name]) {
          if (!err) err = 'Не заполнено обязательное поле:'
          err += ' ' + column.name
        }
      })
      if (err) {
        console.log(err)
        return err
      }
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
      this.getCurrentTable.columns.forEach(column => {
        this.$store.state.newRow[this.getCurrentTable.name][column.name] = null
      })
    },
    // Поле только для чтения
    getNewRowField: function (column) {
      if (column.type === 'date' && this.$store.state.newRow[this.getCurrentTable.name][column.name]) {
        return String(this.$store.state.newRow[this.getCurrentTable.name][column.name]).slice(0, 10)
      } else return this.$store.state.newRow[this.getCurrentTable.name][column.name]
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
</style>
