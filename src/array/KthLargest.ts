class KthLargest {
    k:number;
    nums: number[];
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums.sort();
        console.log(this.nums)
    }

    add(val: number): number {
        if(this.nums.length === 0) {
            this.nums.push(val)
            return this.nums[this.nums.length-this.k]
        }
        if (val <= this.nums[0]) {
            this.nums.unshift(val);
            return this.nums[this.nums.length-this.k]
        }

        if (val > this.nums[this.nums.length-1]) {
            this.nums.push(val);
            return this.nums[this.nums.length-this.k]
        }
        
        const lastNum = this.nums[this.nums.length-1];
        for (let i = this.nums.length-2 ; i >= 0 ; i--){
            if(this.nums[i] > val) {
                this.nums[i+1] = this.nums[i]   
                continue;
            }
            this.nums[i+1] = val;
            break;
        }
        this.nums.push(lastNum);
        console.log(this.nums)
        return this.nums[this.nums.length-this.k-1]
    }
}


const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
 