function request (method, url, data, isFile) {
  const contentType = 'application/json; charset=utf-8' // || contType
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return
      if (xhr.status === 200) {
        try {
          var result = JSON.parse(xhr.response)
        } catch (e) {
          reject(e)
        }
        resolve(result)
      } else {
        reject(xhr.status)
      }
    }
    if (data) {
      if (isFile) { // Если isFile, значит это не JSON, а файлы
        xhr.send(data)
        // Иначе JSON
      } else {
        xhr.setRequestHeader('Content-type', contentType)
        xhr.send(JSON.stringify(data))
      }
    } else {
      xhr.send()
    }
  })
}

export default request
