function search(nums: number[], target: number): number {

    if(!nums || nums.length === 0) return -1;

    let start = 0;
    let end = nums.length-1;
    let mid = Math.floor((end-start+1)/2)

    console.log(start, mid, end)

    while(start <= end){
        if(nums[mid] === target) return mid;
        if(nums[start] === target) return start;
        if(nums[end] === target) return end;

        if(target > nums[mid]){
            start = mid+1;
        } else{
            end = mid-1
        }

        mid = start + Math.floor((end-start+1)/2)
        console.log({start, end, mid})
    }

    return -1;

};
console.log(search([2,4,6,7,8,9,23,33], 33))