import Vue from 'vue'

export default {

  setUser (state, userName) {
    state.userName = userName
  },

  setCurrentTable (state, currentTable) {
    for (let key in currentTable) {
      Vue.set(state.currentTable, key, currentTable[key])
    }
  },

  showStatusBar (state, text) {
    state.statusBar = { text, hidden: false }
  },

  // Для ссылочного поля записать список возможных значений (ссылочной таблицы)
  setLinkList (state, { columnNumber, linkList }) {
    Vue.set(state.currentTable.columns[columnNumber], 'linkList', linkList)
  },

  // Нажали редактировать строку таблицы - записываем её в newRow
  onEditRow (state, row) {
    const newRow = JSON.parse(JSON.stringify(row))
    Vue.set(state.newRow, [state.currentTable.name], newRow)
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
  },

  // Показать картинку в полный размер
  viewImage (state, imageSrc) {
    state.imageSrc = imageSrc
  },

  // Сохранить список Отелей
  saveHotelList (state, hotelList) {
    state.hotelList = hotelList
  },

  // Сохраняем FullInfo отеля
  saveHotelFullInfo (state, fullInfo) {
    state.currentHotel.fullInfo = fullInfo
  }
}
