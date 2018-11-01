const from  = 34253;
const to  = 47635;
count = 0;

for (let i = from; i <= to - 6 ; i=i+2) {
    if (isPrime(i) && isPrime(i+6) && !isPrime(i+2) && !isPrime(i+4)) {
        // console.log(i, i+6);
        count++
    }
}
console.log('result=', count);

function isPrime(x) {
    for (let i = 3; i < x ; i = i+2) {
        if (x % i === 0) return false
    }
    return true
}