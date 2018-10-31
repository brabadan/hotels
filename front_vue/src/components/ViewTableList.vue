<template>
    <div class="view-table-list">
        <div class="header">
            <strong>Список таблиц:</strong>
        </div>
        <ul>
            <li v-for="(table, index) in getTableList"
                v-bind:key="index"
                v-bind:class="[index == getCurrentTableNum ? 'selected' : '']"
                v-bind:data-index="index"
                v-on:click="onSelectTable(table.name)"
            >
                {{ table.name }}
                <!--<router-link v-bind:to="table.name"> {{ table.name }} </router-link>-->
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
    onSelectTable: function (tableName) {
      this.$router.replace('/table/' + tableName + '/page/1')
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
