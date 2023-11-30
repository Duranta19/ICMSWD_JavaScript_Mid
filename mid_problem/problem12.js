function maxProduct(arr){
max = -9999
maxProduct = 0
 for(let i=0; i<arr.length; i++){
    for(let j=i+1; j< arr.length; j++){
        let product = arr[i]*arr[j];
        if(product > max){
            max = product
        }
    }
 }
 return max;   
}

console.log(maxProduct([2, 3, 5, 6, 7]))