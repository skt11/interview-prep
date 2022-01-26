// Given an array A[] and a number x, check for pair in A[] with sum as x (aka Two Sum)

const hasPairNaive = (array: Array<number>, sum: number):boolean => {
    //Naive
    //loop through the whole array and find all the sums to check if there is one
    if (array.length < 2) return false
    for(let i = 0 ; i < array.length-1 ; i++){
        for(let j = i+1; j < array.length ; j++){
            if(array[i] + array[j] === sum){
                return true
            }
        }
    }
    return false;
}

const hasPair = (array: Array<number>, sum: number):boolean|Array<number> => {
    //Optimized
    if (array.length < 2) return false
    const numSet = new Set<number>()
    for(let i = 0 ; i < array.length ; i++){
        if(numSet.has(sum - array[i])){
            return [sum-array[i], array[i]]
        }
        numSet.add(array[i])
    }
    return false;
}


console.log(hasPair([2,-1,5,4], 4))