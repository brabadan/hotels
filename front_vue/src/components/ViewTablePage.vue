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
            <!-- Массив картинок -->
            <div v-if="column.type === 'image' && column.array">
                <img v-for="(src, index) of row[column.name]"
                     v-bind:key="index"
                     v-bind:src="'images/' + src"
                >
            </div>
            <!-- Одна картинка -->
            <div v-else-if="column.type === 'image' && row[column.name]">
                <img v-bind:src="'images/' + row[column.name]"
                >
            </div>
            <!-- Обычное поле -->
            <span v-else>
            {{ getFieldData(column, row) }}
                </span>
        </td>
        <td>
            <!-- Справа кнопка Редактировать -->
            <button
                    v-on:click="onEditRow(row)"
            >
                Редактировать
            </button>
        </td>
    </tr>
    </tbody>
</template>

<script>
import Vue from 'vue'
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
    // Ввозвращаем массив Id картинок
    getImageArr (column, row) {
      let images = row[column.name]
      if (images instanceof Array) return images
      if (images) return [images]
      return []
    },
    // Нажали кнопку Редактировать
    onEditRow: function (row) {
      this.$store.commit('onEditRow', row)
    },
    // Значение ячейки таблицы
    getFieldData: function (column, row) {
      // Если поле-указатель, то возвращаем соответствующее значение
      if (column.link && column.linkList) {
        return column.linkList[row[column.name]] || 'not found :('
      }
      if (column.type === 'date') {
        return (row[column.name] + '').slice(0, 10)
      }
      return row[column.name]
    }
  },
  components: {
    Vue
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

    img
        width 5em
        height: 5em
</style>
