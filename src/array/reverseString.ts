const reverseString = (str: string) : string =>{
    
    if(str.length === 0) return str
    
    const strArr = new Array(str.length)
    
    for (let i = 0 ; i < str.length ; i++){
        strArr.push(str[str.length-i-1])
    }
    return strArr.join('')
}

console.log(reverseString('Cogito, ergo sum.'))