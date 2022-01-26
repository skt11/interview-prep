function missingNumber(nums: number[]): number {
    const n = nums.length
    let sum = n*(n+1)/2
    nums.forEach(num => {
        sum -= num;
    })
    return sum;
};

console.log(missingNumber([3,0,1]))