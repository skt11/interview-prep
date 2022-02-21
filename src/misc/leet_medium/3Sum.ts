// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4], sorted = [ -1, -1, -4, 0, 1, 2 ]
// Output: [[-1,-1,2],[-1,0,1]]

function threeSum(nums: number[]): number[][] {
    let res: number[][] = [];

    for(let i = 0 ; i < nums.length ; i++){
        let temp = twoSum(nums, i+1, 0-nums[i])
        if(temp){
            res.push([nums[i], ...temp])
        }
    }

    return res;
};

function twoSum(nums: number[], start:number, target: number = 0 ) : number[]|undefined{
    const valueMap = new Map<number, number>()
    console.log(target)
    for(let i = start; i < nums.length ; i++){
        if(valueMap.has(target-nums[i])){
            return [nums[i], target-nums[i]]
        }
        valueMap.set(nums[i], i)
    }
    return undefined;
}

console.log(threeSum([-1,0,1,2,-1,-4]))