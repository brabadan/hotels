const a = [-3, 19], b = [-7, -5];

function distance (a, b) {
    let res = Math.sqrt((a[0] - b[0])**2 + (a[1] - b[1])**2);
    console.log(res);
    res = Math.round(res * 10) / 10;
    return res;
}

console.log(distance(a, b));