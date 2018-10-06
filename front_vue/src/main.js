import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const tables = require('../../tables.json')

Vue.config.productionTip = false

let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

vm.$store.state.tableList = tables
vm.$store.state.tableList.forEach(table => { Vue.set(vm.$store.state.newRow, table.name, {}) })
vm.$store.dispatch('checkLogin')
  .then(vm.$store.dispatch('selectTable', 0))
