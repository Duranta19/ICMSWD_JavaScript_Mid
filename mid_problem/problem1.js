function runRate(runs, balls) {
    let x = parseFloat(runs);
    let y = parseFloat(balls);

    let runrate = (x/y)*100;
    return runrate;
    
}

console.log(runRate(45,30).toFixed(2));
console.log(runRate(100,60).toFixed(2));
console.log(runRate(25,40).toFixed(2));