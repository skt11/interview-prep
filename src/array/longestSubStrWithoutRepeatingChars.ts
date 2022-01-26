function lengthOfLongestSubstring(s: string): number {
    if(s.length === 0) return 0;
    
    let charMap = new Map<string, number>();
    let follower = 0;
    let leader = 0;
    let max = 0;
    // let str = ""
    for(;leader < s.length; leader++){
        if(charMap.has(s[leader])){
            follower = Math.max(charMap.get(s[leader])+1, follower)
            // charMap = new Map<string, number>();
            // str = ""
        }

        charMap.set(s[leader], leader)
        // str += s[leader]
        max = Math.max(max, leader-follower+1)
        // console.log({str, charMap, max})
    }
    return max;
};

console.log(lengthOfLongestSubstring("anviaj"))