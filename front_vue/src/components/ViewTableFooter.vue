<template>
        <tfoot>
            <tr>
                <td>new:</td>
                <td v-for="column in getCurrentTable.columns"
                    v-bind:key="column.name"
                >
                    <span v-if="column.readonly">
                        {{ getNewRowField(column) }}
                    </span>
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
                    <input v-else-if="column.type !== 'textarea'"
                           v-bind:type="column.type"
                           v-model="$store.state.newRow[getCurrentTable.name][column.name]"
                           v-bind:title="column.about_column ? column.about_column : column.name"
                />
                    <textarea v-else
                              v-model="$store.state.newRow[getCurrentTable.name][column.name]"
                              v-bind:title="column.about_column ? column.about_column : column.name"
                    ></textarea>
                </td>
                <td>
                    <button v-on:click="rowPutPost">
                        {{ buttonName() }}
                    </button>
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
    buttonName: function () {
      return (this.$store.state.newRow[this.getCurrentTable.name] && this.$store.state.newRow[this.getCurrentTable.name]['_id']) ? 'Изм.' : 'Доб.'
    },
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
    insertRow: function () {
      const table = this.getCurrentTable
      const newRow = this.$store.state.newRow[table.name]
      let err = ''
      table.columns.forEach(column => {
        if (!column.readonly && !newRow[column.name]) {
          if (!err) err = 'Не заполнено обязательное поле:'
          err += ' ' + column.name
        }
      })
      if (err) {
        console.log(err)
        return err
      }
      this.$store.dispatch('insertRow', newRow)
        .then(this.clearNewRow)
    },
    clearNewRow: function () {
      this.$store.state.newRow[this.getCurrentTable.name]._id = null
      this.getCurrentTable.columns.forEach(column => {
        this.$store.state.newRow[this.getCurrentTable.name][column.name] = null
      })
    },
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
