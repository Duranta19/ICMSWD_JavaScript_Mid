function mergeAndSort(arr1,arr2){
    arr1 = arr1.concat(arr2);
    for(let i = 0; i < arr1.length; i++){
        for(let j = i+1; j < arr1.length; j++){
            if(arr1[i] > arr1[j]){
                let temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = temp;
            }
        }
    }
    return arr1;
}

res = mergeAndSort([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])
console.log(res)
res = mergeAndSort([2, 4, 6, 8, 10], [1, 3, 5, 7, 9])
console.log(res)
res = mergeAndSort([1, 2, 3], [4, 5, 6])
console.log(res)