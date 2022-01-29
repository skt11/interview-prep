// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

//TODO : Not passing all tests
function checkPossibility(nums: number[]): boolean {

    if(nums.length < 3) return true;

    let outOfOrderCount = 0;
    let lastMax= nums[0];
    for(let i = 0 ; i < nums.length-1 ; i++){
        if(lastMax < nums[i+1]) {
            lastMax = nums[i+1]
            continue
        }
        lastMax = nums[i === 0 ? 1:i]
        outOfOrderCount++;
        if(outOfOrderCount > 1) return false;
    }
    return true;
};

console.log(checkPossibility([-1,4,2,3]))
console.log(checkPossibility([4,2,3]))