function firstUniqChar(s: string): number {

    const charMap = new Map<string,number>();
    let minIndex = s.length;
    
    for (let i = 0 ; i < s.length ; i++){
        charMap.set(s[i], charMap.has(s[i]) ? charMap.get(s[i])+1 : 1)
    }

    for(let i = 0 ; i < s.length ; i++){
        if(charMap.get(s[i]) === 1){
            return i
        }
    }

    return -1
};

console.log(firstUniqChar("loveleetcode"))
