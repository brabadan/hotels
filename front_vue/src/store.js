import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotelList: [],
    currentHotel: {
      num: 0,
      name: '',
      fullInfo: {
        rooms: [],
        items: []
      }
    },
    serverURL: '', // Путь для работы с другим сервером API
    username: '', // Аутентифицированный Пользователь
    links: [ // массив для sideMenu
      { name: 'Конфигурация', link: 'config' },
      { name: 'Работаем с отелем', link: 'work' }
    ],
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
    newRow: {}, // Здесь хранятся строки ввода данных для таблиц
    imageSrc: '' // Путь для просмотра картинки в полный размер
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
  mutations,
  actions
})
