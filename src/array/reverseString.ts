const reverseString = (str: string) : string =>{
    
    if(str.length === 0) return str
    
    const strArr = new Array(str.length)
    
    for (let i = 0 ; i < str.length ; i++){
        strArr.push(str[str.length-i-1])
    }
    return strArr.join('')
}

const reverseRecursively = (str: string) : string =>{
    
    if(str.length < 2) return str
    
    const strArr = new Array<string>(str.length)
    
    return helper(str, strArr, str.length-1).join("")
}

const helper = (str: string, revArr: Array<string>, idx: number) : Array<string> => {
    if(idx < 0) return revArr;
    revArr.push(str[idx])
    // console.log()
    return helper(str, revArr, idx-1);
}

console.log(reverseRecursively('Cadasdas'))