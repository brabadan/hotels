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
        <ViewTableList class="app-main-view-tables"
        />
        <table>
            <ViewTablePage />
        </table>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AppMainHeader from '@/components/AppMainHeader.vue'
import AppMainSide from '@/components/AppMainSide.vue'
import ViewTablePage from '@/components/ViewTablePage'
import ViewTableList from './ViewTableList'

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
    ViewTablePage,
    AppMainHeader,
    AppMainSide
  }
}

</script>

<style scoped lang="stylus">
.app-main-header
    width 100%
    height 8%
    background-color darkgrey
.app-main-side, .app-main-view-tables
    width 20%
    display block
    float left
    border aqua 1px solid
table
    margin-left auto
    margin-right auto
    border-collapse collapse
    td, th
        border 1px solid
</style>
