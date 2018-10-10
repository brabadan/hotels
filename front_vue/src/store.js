import Vue from 'vue'
import Vuex from 'vuex'
import request from './request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serverURL: '', // http://localhost:3000/',
    username: '',
    links: [{ name: 'Конфигурация' }, { name: 'Работаем с отелем' }],
    tableList: [],
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
    statusBar: {
      text: 'statusBar',
      hidden: false
    },
    currentTableNum: 0,
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
    getCurrentTableRows: (state) => {
      return state.currentTable.rows
    },
    getNewRow: (state) => {
      return state.newRow[state.currentTable.name]
    }
  },
  mutations: {
    checkLogin (state) {
      request('GET', '/login')
        .then(result => {
          if (result.res) state.username = result.res
        })
        .catch(e => {
          state.statusBar.text = `Ошибка проверки подключение: ${e}`
        })
    },
    logout (state) {
      request('POST', '/logout')
      state.username = null
      state.currentTable.rows = []
    },
    login (state, user) {
      if (!user.username || !user.password) {
        state.statusBar.text = 'Имя пользователя и пароль должны быть заполнены!!!'
      } else {
        request('POST', '/login', user)
          .then(result => {
            if (result.res && result.res.username) {
              state.statusBar.text = `Успешная авториация: ${result.res.username}`
              state.username = result.res.username
              this.dispatch('selectTable', state.currentTable.num)
            } else {
              state.statusBar.text = `Неизвестный ответ: ${result}`
            }
          })
          .catch(e => {
            state.statusBar.text = `Ошибка аутентификации: ${e}`
          })
      }
    },
    showStatusBar (state, text) {
      state.statusBar = { text, hidden: false }
    },
    addHotel (state, hotelName) {
      state.hotelsList.push(hotelName)
    },
    selectTable (state, tableNum) {
      const num = +tableNum
      state.currentTableNum = num
      const name = state.tableList[num].name
      const columns = state.tableList[num].columns
      state.currentTable = { ...state.currentTable, num, name, curPage: 1, columns }
      let requests = []
      for (let i = 0; i < columns.length; i++) {
        if (columns[i].link) {
          let newReq = request('GET', state.serverURL + columns[i].link.table + '/toarray')
            .then(res => {
              if (res.result && res.result instanceof Array) {
                const linkedList = res.result.map(r => (
                  { key: r[columns[i].link.columnForSave], value: r[columns[i].link.columnForList] }
                ))
                Vue.set(state.currentTable.columns[i], 'linkList', linkedList)
              }
            })
          requests.push(newReq)
        }
      }
      if (requests.length > 0) {
        Promise.all(requests)
          .then(this.dispatch('selectPage', 1))
          .catch(err => {
            this.state.statusBar.text = 'error when load linkList: ' + err
          })
      } else {
        this.dispatch('selectPage', 1)
      }
    },
    selectPage (state, page) {
      state.statusBar.text = `Loading page ${page} data...`
      const { name, perPage } = state.currentTable
      request('GET', state.serverURL + name + '/page/' + page + '/perpage/' + perPage)
        .then(res => {
          if (res.err) {
            state.statusBar.text = res
          } else {
            state.currentTable.rows = res.result
            state.currentTable.curPage = +page
            state.statusBar.text = `page ${page} loaded successfull`
            this.dispatch('countTableLength')
          }
        })
        .catch(error => {
          state.statusBar.text = `error: ${error} when loading page ${page}`
        })
    },
    countTableLength (state) {
      const name = state.currentTable.name
      request('GET', state.serverURL + name + '/count')
        .then(res => {
          state.currentTable.length = res.result
          state.currentTable.maxPage = Math.ceil(res.result / state.currentTable.perPage)
          state.statusBar.text = res
        })
    },
    onEditRow (state, id) {
      state.currentTable.rows.forEach((row, index) => {
        if (row._id === id) {
          state.currentTable.columns.forEach(column => {
            Vue.set(state.newRow[state.currentTable.name], column.name, row[column.name])
          })
          Vue.set(state.newRow[state.currentTable.name], '_id', row._id)
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
    checkLogin ({ commit }) {
      commit('checkLogin')
    },
    login ({ commit }, user) {
      commit('login', user)
    },
    logout ({ commit }) {
      commit('logout')
    },
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
    putRow ({ commit, state }, row) {
      const newRow = { ...row, created_date: (new Date()), created_user_id: state.currentUser }
      request('PUT', state.serverURL + state.currentTable.name + '/' + row._id, newRow)
        .then((result) => {
          // commit('putRow', result)
          commit('selectPage', state.currentTable.curPage)
          commit('showStatusBar', 'result: ' + result)
        })
        .catch(error => commit('showStatusBar', 'error: ' + error))
    },
    postRow ({ commit, state }, row) {
      const table = state.tableList[state.currentTableNum]
      const newRow = { ...row, created_date: (new Date()), created_user_id: state.currentUser }
      request('POST', state.serverURL + table.name, newRow)
        .then((result) => {
          commit('selectPage', state.currentTable.curPage)
          commit('showStatusBar', 'result: ' + result.req)
        })
        .catch(error => commit('showStatusBar', 'error: ' + error))
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
    countTableLength ({ commit }) {
      commit('countTableLength')
    },
    onChangePerPage ({ commit, state }, perPage) {
      commit('onChangePerPage', perPage)
    }
  }
})
