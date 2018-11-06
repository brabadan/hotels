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
import store from '@/store'

export default {
  name: 'HotelsMain',
  data () {
    return {
      message: 'Это супер-пупер прога про отели'
    }
  },
  beforeRouteEnter (to, from, next) {
    // this.fetchData(to, from, next)
    const tableName = to.params.tableName
    const page = to.params.page
    store.dispatch('selectTableName', tableName)
      .then(store.dispatch('onSelectPage', page))
      .then(next)
      .catch(e => store.dispatch('showStatusText', e))
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchData(to, from, next)
  },
  // watch: {
  //   '$route' (to, from) {
  //     if (this.getCurrentTable.name !== to.params.tableName) {
  //       this.$store.dispatch('selectTableName', to.params.tableName)
  //     } else if (this.getCurrentTable.curPage !== to.params.page) {
  //       this.$store.dispatch('onSelectPage', to.params.page)
  //     }
  //   }
  // },
  computed: {
    ...mapState([
      'links'
    ]),
    ...mapGetters([
      'getCurrentTable'
    ])
  },
  methods: {
    fetchData (to, from, next) {
      if (this.getCurrentTable.name !== to.params.tableName) {
        var fetchPromise = this.$store.dispatch('selectTableName', to.params.tableName)
      } else if (this.getCurrentTable.curPage !== to.params.page) {
        fetchPromise = this.$store.dispatch('onSelectPage', to.params.page)
      } else {
        this.$store.dispatch('showStatusText', 'cant fetch data')
          .then(() => next(false))
          .catch(e => this.$store.dispatch('showStatusText', e))
      }
      fetchPromise
        .then(() => next())
        .catch(e => this.$store.dispatch('showStatusText', e))
    }
  },
  components: {
    ViewTableList,
    ViewTable,
    AppMainHeader,
    AppMainSide,
    StatusBar,
    ViewImage,
    store
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
