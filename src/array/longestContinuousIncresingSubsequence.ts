function findLengthOfLCIS(nums: number[]): number {

    if(nums.length < 2) return nums.length;

    let maxLength = 1;
    let follower = 0;

    for (let leader = 1 ; leader < nums.length ; leader++){
        if(nums[leader] > nums[leader-1]){
            maxLength = Math.max(maxLength, leader-follower+1)
            continue
        }
        follower = leader
    }
    
    return maxLength;
};

console.log(findLengthOfLCIS([1,2,4,5,2,2,4,5,6,7,8,9,1]))