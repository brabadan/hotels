import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotelsList: ['first', 'second', 'third'],
    links: [{ name: 'Конфигурация' }, { name: 'Работаем с отелем' }],
    tables: null
  },
  getters: {
    tableList: (state) => {
      if (!state.tables) state.tables = require('./tables.json')
      return state.tables
    }
  },
  mutations: {
    addHotel (state, hotelName) {
      state.hotelsList.push(hotelName)
    }
  },
  actions: {
    addHotel ({ commit }, hotelName) {
      commit('addHotel', hotelName)
    }
  }
})
