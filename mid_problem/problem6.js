function findShortestWord(input){
    let word_array = input.split(' ');
    let word;
    let min = 9999;

    for(let i=0; i < word_array.length; i++){

        if (word_array[i].length <= min){
            word = word_array[i]
            min = word_array[i].length
        }
    }
    return word;
}

console.log(findShortestWord("The quick brown fox jumps over the lazy dog"))
console.log(findShortestWord("Hello world"))
console.log(findShortestWord("Today is Monday"))