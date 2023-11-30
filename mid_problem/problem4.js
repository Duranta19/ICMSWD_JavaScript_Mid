function check_palindome(input){
    let arr = [];
    for(let i= input.length -1; i>=0; i--){
        arr.push(input[i])
    }
    const revString = arr.join('')
    if (input == revString){
        return 1;
    }
    else{
        return 0;
    }
}

console.log(Boolean(check_palindome("hello")))
console.log(Boolean(check_palindome("racecar")))
console.log(Boolean(check_palindome("peep")))
console.log(Boolean(check_palindome("rotator")))