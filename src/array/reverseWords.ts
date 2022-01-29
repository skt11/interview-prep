// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

function reverseWords(s: string): string {

    let start = 0;
    let end = 0;
    let strArr = []
    for (;end < s.length ; end++){
        if(s[end] === " "){
            reverseWord(start, end-1)
            strArr.push(" ")
            end++
            start = end;
        }
    }

    reverseWord(start, end)

    function reverseWord(idxA, idxB){
        for(let i = 0 ; i <= idxB-idxA ; i++){
            strArr.push(s[idxB-i])
        }
    }
    
    return strArr.join("");
};

console.log(reverseWords("Let's take LeetCode contest"))