<template>
    <tbody>
    <!-- Выводим строки текущей таблицы (после Пагинации) -->
    <tr v-for="(row, index) in getCurrentTable.rows"
        v-bind:key="row._id"
        v-bind:class="getNewRow._id === row._id ? 'onedit' : ''"
    >
        <!-- Рассчитываем и выводим номер строки в таблице -->
        <td>{{ index + 1 + (getCurrentTable.curPage -1) * getCurrentTable.perPage }}</td>
        <!-- Основные столбцы -->
        <td v-for="column in getCurrentTable.columns"
            v-bind:key="row._id + '.' + column.name"
        >
            <!-- Массив картинок -->
            <div v-if="column.type === 'image'">
                <img v-for="(src, index) of getImageArr(row, column)"
                     v-bind:key="index"
                     v-bind:src="'images/' + src"
                     v-on:click="onClickImage"
                >
            </div>
            <!-- Поле-ссылка  = link -->
            <div v-else-if="column.link">
                <!-- Если массив картинок -->
                <div v-if="column.link.imageField"
                     class="link-image-array"
                >
                    <img v-for="(src, index) of getLinkImage(column, row[column.name])"
                         v-bind:key="index"
                         v-bind:src="'images/' + src"
                         v-on:click="onClickImage"
                    >
                </div>
                <!--<img v-else-if="column.link.imageField"-->
                <!--v-bind:src="'images/' + getLinkImage(column, row)"-->
                <!--&gt;-->
                <span>{{ getLinkValue(column, row) }}</span>
            </div>
            <!-- Обычное поле -->
            <span v-else>
            {{ getLinkValue(column, row) }}
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
    getImageArr (row, column) {
      let images = row[column.name]
      if (images instanceof Array) return images
      if (images) return [images]
      return []
    },
    // Клик на картинке показывает её в полный размер
    onClickImage (el) {
      this.$store.dispatch('viewImage', el.srcElement.src)
    },
    // Нажали кнопку Редактировать
    onEditRow: function (row) {
      this.$store.commit('onEditRow', row)
    },
    // Значение link-image
    getLinkImage: function (column, id) {
      // Если поле-указатель, то возвращаем соответствующее значение
      // if (column.link && column.linkList && column.linkList[id]) {
      try {
        let images = column.linkList[id].image
        if (images instanceof Array) return images
        if (images) return [images]
        return []
      } catch (e) {
        this.$store.dispatch('showStatusText', e)
      }
      // }
      // return 'not found :('
    },
    // Значение link-таблицы
    getLinkValue: function (column, row) {
      // Если поле-указатель, то возвращаем соответствующее значение
      if (column.link && column.linkList && column.linkList[row[column.name]]) {
        return column.linkList[row[column.name]].value || 'not found :('
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
        margin: 2px

    img:hover
        cursor move

    span
        display block

    .link-image-array
        display: inline-flex;
</style>
