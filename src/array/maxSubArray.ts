const maxSubArray = (nums: number[]): number => {
    //Figure out kadane
    let globalMax = nums[0];
    let localMax = nums[0];
    for (let i = 1 ; i < nums.length ; i++){
        localMax = Math.max(localMax+nums[i], nums[i])
        globalMax = Math.max(localMax, globalMax)
    }
    return globalMax;
};