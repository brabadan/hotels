import Vue from 'vue'
import Vuex from 'vuex'
import request from './request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serverURL: '', // Путь для работы с другим сервером API
    username: '', // Аутентифицированный Пользователь
    links: [{ name: 'Конфигурация' }, { name: 'Работаем с отелем' }], // массив для sideMenu - устарел
    tableList: [], // Массив таблиц для просмотра и редактирования
    currentTable: { // Текущая таблица при просмотре и редактировании
      num: null, // Номер текущей таблицы
      name: '', // Название текущей таблицы
      curPage: 1, // Номер страницы в Пагинаторе
      maxPage: 0, // Максимальное количество страниц в Пагинаторе
      perPage: 5, // Строк на странице просмотра таблиц
      columns: [], // Массив столбцов текущей таблицы - свойства и линки
      rows: [], // Строки таблицы для текущей страницы Пагинатора
      length: 0 // Общее количество записей таблицы
    },
    statusBar: { // Статусбар для отображения текущего состояния
      text: 'statusBar', // Текст статусбара
      hidden: false // Невидимость/видимость
    },
    currentTableNum: 0, // Номер текущей таблицы - устарел
    currentUser: 0, // Номер пользователя - устарел
    newRow: {} // Здесь хранятся строки ввода данных для таблиц
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
    // Опрос сервера на продолжение авторизованной сессии. Если да - сервер возвращает нам имя пользователя
    checkLogin (state) {
      request('GET', 'login')
        .then(result => {
          if (result.res) state.username = result.res
        })
        .catch(e => {
          state.statusBar.text = `Ошибка проверки подключения: ${e}`
        })
    },
    logout (state) {
      request('POST', 'logout')
      state.username = null
      state.currentTable.rows = []
    },
    login (state, user) {
      if (!user.username || !user.password) {
        state.statusBar.text = 'Имя пользователя и пароль должны быть заполнены!!!'
      } else {
        request('POST', 'login', user)
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
    // Выбор таблицы для просмотра и редактирования
    selectTable (state, tableNum) {
      const num = +tableNum
      state.currentTableNum = num
      const name = state.tableList[num].name
      const columns = state.tableList[num].columns
      state.currentTable = { ...state.currentTable, num, name, curPage: 1, columns }
      let requests = []
      for (let i = 0; i < columns.length; i++) {
        const link = columns[i].link
        if (link) {
          const linkedList = {}
          let newReq = request('GET', state.serverURL + link.table + '/toarray')
            .then(res => {
              if (res.result && res.result instanceof Array) {
                res.result.forEach(r => {
                  linkedList[r[link.keyField]] = r[link.valueField]
                })
              }
              Vue.set(state.currentTable.columns[i], 'linkList', linkedList)
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
    // Выбор страницы Пагинатора
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
    // Получить общий размер таблицы
    countTableLength (state) {
      const name = state.currentTable.name
      request('GET', state.serverURL + name + '/count')
        .then(res => {
          state.currentTable.length = res.result
          state.currentTable.maxPage = Math.ceil(res.result / state.currentTable.perPage)
          state.statusBar.text = res
        })
    },
    // Нажали редактировать строку таблицы - записываем её в newRow
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
    // Сохранение отредактированной строки таблицы
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
    // Вставка новой строки таблицы - устарело
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
    // Изменение СтрокНаСтраницу
    onChangePerPage (state, perPage) {
      state.currentTable.curPage = 1
      state.currentTable.perPage = +perPage
      this.dispatch('selectTable', state.currentTableNum)
        .then(this.dispatch('selectPage', 1))
    }
  },
  actions: {
    // Уже авторизованы? - получим имя пользователя
    checkLogin ({ commit }) {
      commit('checkLogin')
    },
    login ({ commit }, user) {
      commit('login', user)
    },
    logout ({ commit }) {
      commit('logout')
    },
    // Выбор таблицы для просмотра/редактирования
    selectTable ({ commit }, tableNum) {
      commit('selectTable', tableNum)
    },
    // Выбор страницы таблицы для просмотра/редактирования
    selectPage ({ commit }, page) {
      commit('selectPage', page)
    },
    // Нажали Редактировать на строке таблицы
    onEditRow ({ commit, state }, id) {
      commit('onEditRow', id)
    },
    // Сохраняем измененную строку таблицы
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
    // Вставляем строку в таблицу
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
    // Выбор страницы в Пагинаторе
    onSelectPage ({ commit, state }, page) {
      commit('selectPage', page)
    },
    // Общий размер текущей таблицы
    countTableLength ({ commit }) {
      commit('countTableLength')
    },
    // Изменили "СтрокНаСтраницу"
    onChangePerPage ({ commit, state }, perPage) {
      commit('onChangePerPage', perPage)
    }
  }
})
