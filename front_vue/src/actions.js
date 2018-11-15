import request from './request'

export default {
  // Уже авторизованы? - получим имя пользователя
  checkLogin ({ commit, state }) {
    request('GET', state.serverURL + 'login')
      .then(result => {
        if (result.res) commit('setUser', result.res)
      })
      .catch(e => {
        commit('showStatusBar', `Ошибка проверки подключения: ${e}`)
      })
  },

  /**
   * Authorization on Server
   * @param commit
   * @param state
   * @param user - object of user { userName: string, password: string }
   */
  login ({ commit, state }, user) {
    if (!user.userName || !user.password) {
      commit('showStatusBar', 'Имя пользователя и пароль должны быть заполнены!!!')
    } else {
      request('POST', state.serverURL + 'login', user)
        .then(result => {
          if (result.res && result.res.userName) {
            commit('showStatusBar', `Успешная авториация: ${result.res.userName}`)
            commit('setUser', result.res.userName)
            this.dispatch('selectTable', state.currentTable.num)
          } else {
            commit('showStatusBar.text', `Неизвестный ответ: ${result}`)
          }
        })
        .catch(e => {
          commit('showStatusBar.text', `Ошибка аутентификации: ${e}`)
        })
    }
  },

  // logout on Server
  logout ({ commit, state }) {
    request('POST', state.serverURL + 'logout')
      .then(result => {
        if (result.err) {
          commit('showStatusBar', result.err)
        } else {
          commit('setUser', null)
          commit('setCurrentTable', { rows: [] })
        }
      })
      .catch(err => {
        this.commit('showStatusBar', err)
      })
  },

  // Удалить картинку в строке редактирования записи
  delNewRowImage ({ commit }, { imageId, columnName }) {
    commit('delNewRowImage', { imageId, columnName })
  },

  // Выбор таблицы для просмотра/редактирования
  // todo filter for ViewTable
  selectTable ({ commit, state }, tableNum) {
    const num = +tableNum
    const name = state.tableList[num].name
    const columns = state.tableList[num].columns
    commit('setCurrentTable', { num, name, curPage: 1, columns })

    let requests = []
    for (let columnNumber = 0; columnNumber < columns.length; columnNumber++) {
      const link = columns[columnNumber].link
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
            return commit('setLinkList', { columnNumber, linkList })
          })
        requests.push(newReq)
      }
    }
    // Если есть поля-ссылки, ждём обработки их запросов
    if (requests.length > 0) {
      Promise.all(requests)
        .then(this.dispatch('selectPage', 1))
        .catch(err => {
          commit('showStatusBar', 'error when load linkList: ' + err)
        })
    } else {
      this.dispatch('selectPage', 1)
    }
  },

  selectTableName ({ commit, state }, tableName) {
    for (let num in state.tableList) {
      if (state.tableList[num].name === tableName) {
        return this.dispatch('selectTable', num)
      }
    }
    this.commit('showStatusBar', `Не найдена таблица ${tableName}`)
  },

  // Выбор страницы таблицы для просмотра/редактирования
  selectPage ({ commit, state }, page) {
    commit('showStatusBar', `Loading page ${page} data...`)
    const { name, perPage } = state.currentTable
    request('GET', state.serverURL + name + '/page/' + page + '/perpage/' + perPage)
      .then(res => {
        if (res.err) {
          commit('showStatusBar', res)
        } else {
          const currentTable = {
            rows: res.result,
            curPage: +page
          }
          commit('setCurrentTable', currentTable)
          commit('showStatusBar', `page ${page} loaded successfull`)
          this.dispatch('countTableLength')
        }
      })
      .catch(error => {
        state.statusBar.text = `error: ${error} when loading page ${page}`
      })
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

  // Общий размер текущей таблицы
  countTableLength ({ commit, state }) {
    const name = state.currentTable.name
    request('GET', state.serverURL + name + '/count')
      .then(res => {
        const currentTable = {
          length: res.result,
          maxPage: Math.ceil(res.result / state.currentTable.perPage)
        }
        commit('setCurrentTable', currentTable)
      })
  },

  // Изменили "СтрокНаСтраницу"
  onChangePerPage ({ commit, state }, perPage) {
    const currentTable = {
      curPage: 1,
      perPage: +perPage
    }
    commit('setCurrentTable', currentTable)
    this.dispatch('selectTable', state.currentTable.num)
  },

  // Показать текст в Статусной строки
  showStatusText ({ commit }, text) {
    commit('showStatusBar', text)
  },

  // Показать картинку в полный размер
  viewImage ({ commit }, imageSrc) {
    commit('viewImage', imageSrc)
  },

  // Скачать список Отелей
  getHotelList ({ commit, state }) {
    request('GET', state.serverURL + 'hotels/toarray')
      .then(res => {
        if (res.result && res.result instanceof Array) {
          commit('saveHotelList', res.result)
        }
      })
      .catch(error => commit('showStatusBar', 'error: ' + error))
  },

  // При изменении текущего отеля, скачиваем всю ссответствующую инфу
  onCurrentHotelChanged ({ commit, state }) {
    request('GET', state.serverURL + 'hotel_full_info/' + state.currentHotel._id)
      .then(res => {
        if (res.result) {
          commit('saveHotelFullInfo', res.result)
        }
      })
      .catch(error => commit('showStatusBar', 'error: ' + error))
  }
}
