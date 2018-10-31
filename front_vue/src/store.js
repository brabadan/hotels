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
    getCurrentTableNum: (state) => { // Устарело
      return state.currentTable.num
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
      request('GET', state.serverURL + 'login')
        .then(result => {
          if (result.res) state.username = result.res
        })
        .catch(e => {
          state.statusBar.text = `Ошибка проверки подключения: ${e}`
        })
    },
    logout (state) {
      request('POST', state.serverURL + 'logout')
      state.username = null
      state.currentTable.rows = []
    },
    login (state, user) {
      if (!user.username || !user.password) {
        state.statusBar.text = 'Имя пользователя и пароль должны быть заполнены!!!'
      } else {
        request('POST', state.serverURL + 'login', user)
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

    // Выбор таблицы по имени
    selectTableName (state, tableName) {
      for (let num in state.tableList) {
        if (state.tableList[num].name === tableName) {
          return this.commit('selectTable', num)
        }
      }
      this.commit('showStatusBar', `Не найдена таблица ${tableName}`)
    },

    // Выбор таблицы для просмотра и редактирования
    selectTable (state, tableNum) {
      const num = +tableNum
      const name = state.tableList[num].name
      const columns = state.tableList[num].columns
      state.currentTable = { ...state.currentTable, num, name, curPage: 1, columns }
      let requests = []
      for (let i = 0; i < columns.length; i++) {
        const link = columns[i].link
        // Если поле-ссылка, запрашиваем данные соответствующей таблицы
        if (link) {
          const linkList = {} // Объект типа { id: name }
          let newReq = request('GET', state.serverURL + link.table + '/toarray')
            .then(res => {
              if (res.result && res.result instanceof Array) {
                res.result.forEach(r => {
                  linkList[r[link.keyField]] = {
                    value: r[link.valueField],
                    image: r[link.imageField]
                  }
                })
              }
              return Vue.set(state.currentTable.columns[i], 'linkList', linkList)
            })
          requests.push(newReq)
        }
      }
      // Если есть поля-ссылки, ждём обработки их запросов
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
    onEditRow (state, row) {
      const newRow = JSON.parse(JSON.stringify(row))
      Vue.set(state.newRow, [state.currentTable.name], newRow)
    },

    // Сохранение отредактированной строки таблицы
    replaceRow (state, newRow) {
      const table = state.tableList[state.currentTable.num]
      state.tableRows[table.name].forEach((row, index) => {
        if (+row.id === +newRow.id) {
          Object.keys(newRow).forEach(key => {
            Vue.set(state.tableRows[table.name][index], key, newRow[key])
          })
        }
      })
    },

    // Изменение СтрокНаСтраницу
    onChangePerPage (state, perPage) {
      state.currentTable.curPage = 1
      state.currentTable.perPage = +perPage
      this.dispatch('selectTable', state.currentTable.num)
        .then(this.dispatch('selectPage', 1))
    },

    // Удалить картинку в строке редактирования таблицы
    delNewRowImage (state, { imageId, columnName }) {
      const tableName = state.currentTable.name
      let images = state.newRow[tableName][columnName]
      // Если массив картинок - удаляем именно эту
      if (images instanceof Array) {
        images.splice(images.indexOf(imageId), 1)
        // Иначе очищаем единственную запись
      } else {
        images = null
      }
      Object.assign(state.newRow[tableName][columnName], images)
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
    // Удалить картинку в строке редактирования записи
    delNewRowImage ({ commit }, { imageId, columnName }) {
      console.log(imageId, columnName)
      commit('delNewRowImage', { imageId, columnName })
    },
    // Выбор таблицы для просмотра/редактирования
    // todo filter for ViewTable
    selectTable ({ commit }, tableNum) {
      commit('selectTable', tableNum)
    },
    selectTableName ({ commit }, tableName) {
      commit('selectTableName', tableName)
    },
    // Выбор страницы таблицы для просмотра/редактирования
    selectPage ({ commit }, page) {
      commit('selectPage', page)
    },
    // Сохраняем измененную строку таблицы
    putRow ({ commit, state }, row) {
      // const newRow = row
      request('PUT', state.serverURL + state.currentTable.name + '/' + row._id, row)
        .then((result) => {
          // commit('putRow', result)
          commit('selectPage', state.currentTable.curPage)
          commit('showStatusBar', 'result: ' + result)
        })
        .catch(error => commit('showStatusBar', 'error: ' + error))
    },
    // Вставляем строку в таблицу
    postRow ({ commit, state }, row) {
      const table = state.tableList[state.currentTable.num]
      // const newRow = row // { ...row, created_date: (new Date()), created_user_id: state.currentUser }
      request('POST', state.serverURL + table.name, row)
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
    },
    // Показать текст в Статусной строки
    showStatusText ({ commit }, text) {
      commit('showStatusBar', text)
    }
  }
})
