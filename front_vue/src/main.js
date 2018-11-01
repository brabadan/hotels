import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const tables = require('../../tables.json')
store.state.tableList = tables
store.state.tableList.forEach(table => { Vue.set(store.state.newRow, table.name, {}) })
store.dispatch('checkLogin')
  .then(() => store.dispatch('selectTable', 0))
  .then(
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  )
  .catch(e => {
    console.error(e)
  })
// .then(vm.$store.dispatch('selectTable', 0))
