function rev_string(input){
    let arr = [];
    for(let i= input.length -1; i>=0; i--){
        arr.push(input[i])
    }
    const revString = arr.join('')
    return revString;
}

console.log(rev_string("hello"))
console.log(rev_string("racecar"))
console.log(rev_string("12345"))