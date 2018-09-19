<template>
    <tbody>
    <tr v-for="row in getCurrentTable.rows"
        v-bind:key="row.id"
    >
        <td v-for="column in getCurrentTable.columns"
            v-bind:key="row.id + '.' + column.name"
        >
            {{ getFieldData(column, row) }}
        </td>
        <td>
            <button
                    v-bind:data-id="row.id"
                    v-on:click="onEditRow"
            >
                Редактировать
            </button>
        </td>
    </tr>
    </tbody>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ViewTablePage',
  computed: {
    ...mapGetters([
      'getCurrentTable',
      'getLinkedField'
    ])
  },
  methods: {
    onEditRow: function (e) {
      this.$store.dispatch('onEditRow', e.target.dataset.id)
    },
    getFieldData: function (column, row) {
      if (column.link) {
        return this.getLinkedField(column, row)
      } else {
        if (column.type === 'date') return (row[column.name] + '').slice(0, 10)
        else return row[column.name]
      }
    }
  }
}
</script>

<style scoped lang="stylus">
button
    visibility hidden
tr:hover
    background-color antiquewhite
    button
        visibility visible
tr button:hover
    cursor pointer
td
    border 1px solid
</style>
