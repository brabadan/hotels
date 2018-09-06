import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotelsList: ['first', 'second', 'third'],
    links: [{ name: 'Конфигурация' }, { name: 'Работаем с отелем' }],
    tables: null,
    currentTableNum: 0,
    tableRows: [
      { number: 1, columns: ['lala', 'lolo'] },
      { number: 5, columns: ['fafa', 'fofo'] }]
  },
  getters: {
    tableList: (state) => {
      if (!state.tables) state.tables = require('./tables.json')
      return state.tables
    },
    getTableRows: (state) => {
      return state.tableRows
    },
    getCurrentTableNum: (state) => {
      return state.currentTableNum
    }
  },
  mutations: {
    addHotel (state, hotelName) {
      state.hotelsList.push(hotelName)
    },
    selectTable (state, tableNum) {
      state.currentTableNum = +tableNum
    }
  },
  actions: {
    addHotel ({ commit }, hotelName) {
      commit('addHotel', hotelName)
    },
    selectTable ({ commit }, tableNum) {
      commit('selectTable', tableNum)
    }
  }
})
