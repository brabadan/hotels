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
            <div v-if="column.type === 'image'">
                <img v-for="src of getImageSrcArr(column, row)"
                     v-bind:src="'images/' + src"
                >
            </div>
            <span v-else>
            {{ getFieldData(column, row) }}
                </span>
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
      // Ввозвращаем массив путей к картинкам
      getImageSrcArr (column, row) {
        let images = row[column.name]
        if (images instanceof Array) return images
        if (images) return [images]
        return []
      },
      // Нажали кнопку Редактировать
      onEditRow: function (e) {
        this.$store.dispatch('onEditRow', e.target.dataset.id)
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
        // if (column.type === 'image') {
        //   return '<img src="http://127.0.0.1:8080/hotel_admin/images/5bc9e73a62847f3584abaa4e" />';
        // }
        return row[column.name]
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

    img
        width 5em
        height: 5em
</style>
