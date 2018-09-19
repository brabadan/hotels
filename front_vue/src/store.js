import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const tables = require('./tables.json')
let LSTableRows = localStorage.getItem('tableRows')
LSTableRows = LSTableRows ? JSON.parse(LSTableRows) : {}

export default new Vuex.Store({
  state: {
    hotelsList: ['first', 'second', 'third'],
    links: [{ name: 'Конфигурация' }, { name: 'Работаем с отелем' }],
    tableList: tables,
    currentTable: {
      num: null,
      name: '',
      curPage: 1,
      maxPage: 0,
      perPage: 5,
      columns: [],
      rows: [],
      length: 0
    },
    currentTableNum: 0,
    tableRows: LSTableRows,
    currentUser: 0,
    newRow: {}
  },
  getters: {
    getTableList: (state) => {
      return state.tableList
    },
    getTableRows: (state) => {
      return state.tableRows
    },
    getCurrentTableNum: (state) => {
      return state.currentTableNum
    },
    getCurrentTable: (state) => {
      return state.currentTable
    },
    getCurrentTableName: (state) => {
      return state.currentTable.name
    },
    getCurrentTableRows: (state) => {
      return state.currentTable.rows
    },
    getLinkedField (state) {
      return function (column, row) {
        const tableName = column.link.table
        const columnForList = column.link.columnForList
        const columnForFind = column.link.columnForSave
        for (let r of state.tableRows[tableName]) {
          if (String(r[columnForFind]) === String(row[column.name])) {
            return r[columnForList]
          }
        }
        return 'not found'
      }
    },
    getLinkedList (state) {
      return function (column) {
        const tableName = column.link.table
        const columnForList = column.link.columnForList
        const columnForFind = column.link.columnForSave
        return state.tableRows[tableName].map(row => ({ key: row[columnForFind], value: row[columnForList] }))
      }
    }
  },
  mutations: {
    addHotel (state, hotelName) {
      state.hotelsList.push(hotelName)
    },
    selectTable (state, tableNum) {
      const num = +tableNum
      state.currentTableNum = num
      const name = state.tableList[num].name
      const columns = state.tableList[num].columns
      // Если у таблицы нет записей - создаем пустой массив
      if (!state.tableRows[name]) {
        Vue.set(state.tableRows, name, [])
      }
      const length = state.tableRows[name].length
      const maxPage = Math.ceil(length / state.currentTable.perPage)
      state.currentTable = { ...state.currentTable, num, name, length, curPage: 1, maxPage, columns }
      this.dispatch('selectPage', 1)
    },
    selectPage (state, page) {
      let rows = state.tableRows[state.currentTable.name]
      const from = state.currentTable.perPage * (page - 1)
      const to = Math.min(rows.length, from + state.currentTable.perPage)
      state.currentTable.rows = rows.slice(from, to)
      state.currentTable.curPage = +page
    },
    onEditRow (state, id) {
      const table = state.tableList[state.currentTableNum]
      state.tableRows[table.name].forEach((row, index) => {
        if (+row.id === +id) {
          Object.keys(row).forEach(key => {
            Vue.set(state.newRow[table.name], key, row[key])
          })
        }
      })
    },
    replaceRow (state, newRow) {
      const table = state.tableList[state.currentTableNum]
      state.tableRows[table.name].forEach((row, index) => {
        if (+row.id === +newRow.id) {
          Object.keys(newRow).forEach(key => {
            Vue.set(state.tableRows[table.name][index], key, newRow[key])
          })
        }
      })
    },
    insertRow (state, newRow) {
      const table = state.tableList[state.currentTableNum]
      if (!state.tableRows[table.name]) state.tableRows[table.name] = []
      state.tableRows[table.name].push(newRow)
      state.currentTable.length++
      localStorage.setItem('tableRows', JSON.stringify(state.tableRows))
      let curPage = state.currentTable.curPage
      this.dispatch('selectTable', state.currentTableNum)
        .then(this.dispatch('selectPage', curPage))
    },
    onChangePerPage (state, perPage) {
      state.currentTable.curPage = 1
      state.currentTable.perPage = +perPage
      this.dispatch('selectTable', state.currentTableNum)
        .then(this.dispatch('selectPage', 1))
    }
  },
  actions: {
    addHotel ({ commit }, hotelName) {
      commit('addHotel', hotelName)
    },
    selectTable ({ commit }, tableNum) {
      commit('selectTable', tableNum)
    },
    selectPage ({ commit }, page) {
      commit('selectPage', page)
    },
    onEditRow ({ commit, state }, id) {
      commit('onEditRow', id)
    },
    insertRow ({ commit, state }, newRow) {
      const table = state.tableList[state.currentTableNum]
      const tableRows = state.tableRows[table.name]
      // Если есть id значит заменяем редактированную строку
      if (newRow.id) {
        commit('replaceRow', { ...newRow, created_date: (new Date()), created_user_id: state.currentUser })
      } else { // Иначе запись новой строки
        const id = tableRows && tableRows.length ? tableRows.slice(-1)[0].id + 1 : 1
        commit('insertRow', { ...newRow, id, created_date: (new Date()), created_user_id: state.currentUser })
      }
    },
    onSelectPage ({ commit, state }, page) {
      commit('selectPage', page)
    },
    onChangePerPage ({ commit, state }, perPage) {
      commit('onChangePerPage', perPage)
    }
  }
})
