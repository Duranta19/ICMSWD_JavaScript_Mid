function check_pairs(input){
    let count = 0;
    let arr = [];
    for(let i= 0; i< input.length -1; i+=2){
        if(parseInt(input[i+1]) % 2 == 0){
            count+= 1;
        }
    }
    return count;
}

console.log(check_pairs("a1b2c3d4e5f6"))
console.log(check_pairs("x1y2z3"))
console.log(check_pairs("a2b2c2d2"))