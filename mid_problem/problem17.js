function median(arr){
    const n = parseInt(arr.length)
    if(n % 2 === 0){
        arr = arr.sort();
        let i = parseInt(n/2)
        median = (arr[i] + arr[i+1])/2;
    }
    else{
        let i = parseInt(n/2);
        median = arr[i];
    }
    return median;
}


console.log(median([4, 2, 7, 1, 9, 10]))