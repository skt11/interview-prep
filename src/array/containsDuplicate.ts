function containsDuplicate(nums: number[]): boolean {
    const arrSet = new Set<number>(nums);
    return (arrSet.size < nums.length)
}; 


console.log(containsDuplicate([1,2,3,1]))