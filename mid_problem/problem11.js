function missingNum(arr){
    for(let i =0; i<arr.length; i++){
        if(i+1 != arr[i]){
            return i+1;
            
        }
    }
}

console.log(missingNum([1, 2, 3, 5, 6, 7, 8]))