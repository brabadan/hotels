<template>
    <div class="view-table-list">
        <div class="header">
            <strong>Список таблиц:</strong>
        </div>
        <ul>
            <li v-for="(table, index) in getTableList"
                v-bind:key="index"
                v-bind:class="[index == getCurrentTableNum ? 'selected' : '']"
                v-on:click="onSelectTable"
                v-bind:data-index="index"
            >
                {{ table.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ViewTableList',
  computed: {
    ...mapGetters([
      'getTableList',
      'getCurrentTableNum'
    ])
  },
  methods: {
    onSelectTable: function (e) {
      this.$store.dispatch('selectTable', e.target.dataset.index)
    }
  }
}
</script>

<style scoped lang="stylus">
ul
    list-style none
    padding 0 1em 0 1em
    li
        background-color antiquewhite
        margin 1px
    li:hover
        cursor pointer
        background-color aqua
    li.selected
        color darkgreen
        font-weight bold
div.header
    background-color aquamarine
</style>
