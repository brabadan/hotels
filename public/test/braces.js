// Complete the braces function below.
function braces(values) {
    let ref = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    let arr = []
    for (let i = 0; i < values.length; i++) {
        if ('{[('.includes(values[i])) {
            arr.push(values[i])
        }
        if ('}])'.includes(values[i])) {
            if (ref[values[i]] !== arr.pop()) return 'NO'
        }
    }
    if (arr.length) return 'NO'
    return 'YES'
}

