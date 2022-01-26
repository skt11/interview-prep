const mergeSortedArrays = (arr1: Array<number>, arr2: Array<number>) : Array<number> => {
    const mergedArr = new Array<number>();
    let i =0,j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            mergedArr.push(arr1[i++])
            continue
        } 
        mergedArr.push(arr2[j++])
    }

    if(i < arr1.length){
        for(let idx = i ; idx < arr1.length ; idx++){
            mergedArr.push(arr1[idx])
        }
    } 
    else if (j < arr2.length){
        for(let idx = j ; j < arr1.length ; j++){
            mergedArr.push(arr2[idx])
        }
    }
    
    return mergedArr
}

console.log(mergeSortedArrays([0,3,4,31], [-1,2,3]));