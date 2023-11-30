function fibonacciSeries(num) {
    let fibArr = [];
    let a = 0, b = 1, c, i;

    if (num >= 1) {
        fibArr.push(a);
    }

    if (num >= 2) {
        fibArr.push(b);
    }

    for (i = 3; i <= num; i++) {
        c = a + b;
        a = b;
        b = c;
        fibArr.push(c);
    }

    return fibArr;
}
function PerfSqur (x){
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}
function checkFibonacci(num){
    return PerfSqur(5 * num * num + 4) || PerfSqur(5 * num * num - 4);
}

console.log(fibonacciSeries(8));
console.log(checkFibonacci(8));
