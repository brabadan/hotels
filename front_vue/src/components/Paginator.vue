<template>
    <div>
        Стр.
        <button v-for="(page, index) in getPages"
                v-bind:key="index"
                v-bind:data-page="page"
                v-on:click="onSelectPage"
                v-bind:disabled="getCurrentTable.curPage == page || page == 0"
        >
            {{ page > 0 ? page : '...' }}
        </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Paginator',
  computed: {
    ...mapGetters([
      'getCurrentTable'
    ]),
    getPages: function () {
      let pages = []
      let { curPage, maxPage } = this.getCurrentTable
      // Собираем массив с номерами страниц для пагинации
      if (curPage < 5) {
        for (let i = 1; i <= Math.min(curPage + 2, maxPage); i++) {
          pages.push(i)
        }
      } else {
        pages = [1, 0]
        for (let i = curPage - 2; i <= Math.min(curPage + 2, maxPage); i++) pages.push(i)
      }
      if (curPage < maxPage - 3) pages.push(0)
      if (curPage < maxPage - 2) pages.push(maxPage)
      return pages
    }
  },
  methods: {
    onSelectPage: function (e) {
      this.$store.dispatch('onSelectPage', e.target.dataset.page)
    }
  }
}
</script>

<style scoped lang="stylus">
button
    transition 0.5s
</style>
