function findPrime(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                count++;
                break; 
            }
        }
        if (count === 0 && arr[i] > 1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(findPrime([2, 3, 4, 5, 6, 7, 8, 9, 10]));