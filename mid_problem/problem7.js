function check_duplicate(arr){
    
    let newArray = []
    for(let i =0; i < arr.length; i++){
        let count = 0;
        for(let j=i+1; j< arr.length; j++){
            if(arr[i] ==  arr[j]){
                count++;
            }
        }
        if(count == 0){ 
            newArray.push(arr[i])
        }
    }
    return newArray;
}

console.log(check_duplicate(['Zara', 'Sadia' , 'Mahin' , 'Adnan' , 'Maisha', 'Adnan', 'Faiyaz']))