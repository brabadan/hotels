<template>
    <div class="app-main">
        <AppMainHeader :headerText="message"
                       class="app-main-header"
        >
        </AppMainHeader>
        <ViewTableList class="app-main-view-table-list"
        />
        <ViewTable class="app-main-view-table"/>
        <ViewImage v-bind:image-src="this.$store.state.imageSrc"></ViewImage>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AppMainHeader from '@/components/AppMainHeader.vue'
import AppMainSide from '@/components/AppMainSide.vue'
import ViewTableList from '@/components/ViewTableList'
import ViewTable from '@/components/ViewTable'
import StatusBar from '@/components/StatusBar'
import ViewImage from '../components/ViewImage'

export default {
  name: 'HotelsMain',
  data () {
    return {
      message: 'Это супер-пупер прога про отели'
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.getCurrentTable.name !== to.params.tableName) {
        this.$store.dispatch('selectTableName', to.params.tableName)
      } else if (this.getCurrentTable.curPage !== to.params.page) {
        this.$store.dispatch('onSelectPage', to.params.page)
      }
    }
  },
  computed: {
    ...mapState([
      'links'
    ]),
    ...mapGetters([
      'getCurrentTable'
    ])
  },
  components: {
    ViewTableList,
    ViewTable,
    AppMainHeader,
    AppMainSide,
    StatusBar,
    ViewImage
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
