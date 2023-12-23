function fact(num) {
    let ans = 1
    for (let i = num; i > 0; i--){
        ans = ans*i;
    }
    return ans;
}

console.log(fact(0))
