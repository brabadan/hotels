function request (method, url, data) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    // xhr.withCredentials = true
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
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }
  })
}

export default request
