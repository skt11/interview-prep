// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 
// Constraints:
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

//O(n*k)
function rotate1(nums: number[], k: number): void {
    
    if(!nums || nums.length < 2) return

    const effectiveRotations = k % nums.length;

    for(let i = 1 ; i <= effectiveRotations ; i++){
        shiftRight(nums)
    }

};

const shiftRight = (nums: number[]): void => {
    const temp = nums[nums.length-1];
    for(let i = nums.length-1; i > 0; i--){
        nums[i] = nums[i-1];
    }
    nums[0] = temp
}

//O(n+k)
function rotate2(nums: number[], k: number): void {
    
    if(!nums || nums.length < 2) return

    const effectiveRotations = k % nums.length;

    const tempArr = [];

    for(let i = 0 ; i < effectiveRotations ; i++){
        tempArr.push(nums[nums.length-effectiveRotations+i])
    }

    const totalShifts = nums.length - effectiveRotations;
    const shiftStartIdx = nums.length - totalShifts;
    for(let i = totalShifts-1 ; i >= 0 ; i--){
        nums[shiftStartIdx+i] = nums[i]
    }

    console.log(totalShifts, tempArr, nums)

    for(let i = 0 ; i < tempArr.length ; i++){
        nums[i] = tempArr[i]
    }

};

const nums = [1,2];
rotate2(nums, 3)

console.log(nums)
