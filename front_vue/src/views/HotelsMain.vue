<template>
    <div class="app-main">
        <AppMainHeader :headerText="message"
                        class="app-main-header"
        >
        </AppMainHeader>
        <AppMainSide :links="links"
                    class="app-main-side"
        >
        </AppMainSide>
        <ViewTableList class="app-main-view-table-list"
        />
        <ViewTable class="app-main-view-table" />
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AppMainHeader from '@/components/AppMainHeader.vue'
import AppMainSide from '@/components/AppMainSide.vue'
import ViewTableList from '@/components/ViewTableList'
import ViewTable from '@/components/ViewTable'
import StatusBar from '@/components/StatusBar'

export default {
  name: 'HotelsMain',
  data () {
    return {
      message: 'Это супер-пупер прога про отели'
    }
  },
  computed: {
    ...mapState([
      'links'
    ]),
    ...mapGetters([
      'tableList'
    ])
  },
  components: {
    ViewTableList,
    ViewTable,
    AppMainHeader,
    AppMainSide,
    StatusBar
  }
}

</script>

<style scoped lang="stylus">
.app-main-header
    width 100%
    height 8%
    background-color darkgrey
.app-main-side, .app-main-view-table-list
    width 20%
    display block
    float left
    border aqua 1px solid
    margin 0.3em
table
    margin-left auto
    margin-right auto
    border-collapse collapse
    td, th
        border 1px solid
</style>
