<template>
    <div class="view-table">
        <table v-if="getCurrentTable">
            <caption>
                <strong>{{ getCurrentTable.aboutTable }}</strong>
                <Paginator class="paginator"/>
                <PerPage class="per-page"/>
            </caption>
            <thead>
                <tr>
                    <th>№</th>
                    <th v-for="(column, index) in getCurrentTable.columns"
                        v-bind:key="index"
                    >
                        {{ column.name }}
                    </th>
                    <th class="action-column"></th>
                </tr>
            </thead>
            <ViewTableFooter/>
            <ViewTablePage/>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ViewTablePage from './ViewTablePage'
import ViewTableFooter from './ViewTableFooter'
import Paginator from './Paginator'
import PerPage from './PerPage'

export default {
  name: 'ViewTable',
  computed: {
    ...mapGetters([
      'getCurrentTable'
    ])
  },
  components: {
    ViewTableFooter,
    ViewTablePage,
    Paginator,
    PerPage
  }
}
</script>

<style scoped lang="stylus">
table
    border 2px solid lightblue
    border-collapse collapse
    thead, caption
        background-color lightcyan
        border 2px solid lightblue
    th, td
        border 1px solid lightblue
        padding 0.2em
    th.action-column
        background-color antiquewhite
.paginator
    float left
    margin-left 0.5em
.per-page
    float right
</style>
