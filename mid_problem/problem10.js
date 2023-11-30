function getPosNum(arr){
    newArr = []
    for(let i =0; i< arr.length; i++){
        if(arr[i] >= 0){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(getPosNum([2, -5, 10, -3, 8, -1, 0, 7]))