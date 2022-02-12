function longestPalindrome(s: string): string {
    let lookUp = new Array(s.length)
    for (var i = 0; i < s.length; i++) {
        lookUp[i] = Array(s.length).fill(false);
    }

    let max = [0,0];
    for(let i = 0 ; i < s.length ; i++){
        for(let j = 0 ; j < s.length ; j++){
            if(isPalin(s, i, j, lookUp) && j-i+1 > max[1]-max[0]+1){
                max = [i, j]
            }
        }
    }

    return s.substring(max[0], max[1]+1);
};

function isPalin(s: string, i: number, j: number, lookUp: boolean[][]) : boolean {
    for (let k = 0 ; k <= (j-i)/2 ; k++){
        if(lookUp[k+i][j-k]) return true
        if(s[i+k] !== s[j-k]) return false
    }
    lookUp[i][j] = true;
    return true;
}

console.log(longestPalindrome("abcbaf"))