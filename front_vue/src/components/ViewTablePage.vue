<template>
    <tbody>
    <!-- Выводим строки текущей таблицы (после Пагинации) -->
    <tr v-for="(row, index) in getCurrentTable.rows"
        v-bind:key="row._id"
        v-bind:class="getNewRow._id === row._id ? 'onedit' : ''"
    >
        <!-- Рассчитываем номер строки в таблице -->
        <td>{{ index + 1 + (getCurrentTable.curPage -1) * getCurrentTable.perPage }}</td>
        <!-- Остальные столбцы -->
        <td v-for="column in getCurrentTable.columns"
            v-bind:key="row._id + '.' + column.name"
        >
            {{ getFieldData(column, row) }}
        </td>
        <td>
            <!-- Справа кнопка Редактировать -->
            <button
                    v-bind:data-id="row._id"
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
      'getNewRow'
    ])
  },
  methods: {
    // Нажали кнопку Редактировать
    onEditRow: function (e) {
      this.$store.dispatch('onEditRow', e.target.dataset.id)
    },
    // Значение ячейки таблицы
    getFieldData: function (column, row) {
      // Если поле-указатель, то возвращаем соответствующее значение
      if (column.link && column.linkList) {
        return column.linkList[row[column.name]] || 'not found :('
      } else { // Обычное поле
        if (column.type === 'date') {
          return (row[column.name] + '').slice(0, 10)
        } else {
          return row[column.name]
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus">
    tr.onedit, tr.onedit:hover
        background-color coral

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
