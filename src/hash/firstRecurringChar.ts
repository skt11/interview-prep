// Given a string s, find the first repeating character in it and return its index. 
// If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 1

// Example 2:
// Input: s = "loveleetcode"
// Output: 0

// Example 3:
// Input: s = "aabb"
// Output: 0

function firstRecChar(s: string): string {

    let minIndex = -1;
    let charMap = new Map<string, number>()

    for (let i = 0 ; i < s.length ; i++){
        if(charMap.has(s[i])){  
            minIndex = minIndex >= charMap.get(s[i]) || minIndex === -1 ? charMap.get(s[i]) : minIndex;
            continue;
        }
        charMap.set(s[i], i)
    }

    return s[minIndex];

};

console.log(firstRecChar("211235124"))