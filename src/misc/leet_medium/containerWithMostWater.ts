function maxArea(height: number[]): number {
    let localMax = 0;
    let globalMax = 0;
    for(let i = 0 ; i < height.length ; i++){
        localMax = Math.max(leftMax(height, i), rightMax(height, i));
        globalMax = Math.max(localMax, globalMax)
    }
    return globalMax;
};

function leftMax(height: number[], index: number): number{
    const y = height[index];
    let x = 0;
    for (let i = index ; i >= 0 ; i--){
        if(height[i] >= y){
            x = index-i;
        }
    }
    return x*y;
}

function rightMax(height: number[], index: number): number{
    const y = height[index];
    let x = 0;
    for (let i = index ; i < height.length ; i++){
        if(height[i] >= y){
            x = i-index;
        }
    }
    return x*y;
}

function maxAreaGreedy(height: number[]): number {
    let globalMax = 0;
    let left = 0, right = height.length-1;
    while(left < right) {
        if(height[left] <= height[right]){
            globalMax = Math.max(globalMax, height[left]*(right-left))
            left++;
        } else{
            globalMax = Math.max(globalMax, height[right]*(right-left))
            right--;
        }
        
    }
    return globalMax;
};

console.log(maxAreaGreedy([1,8,6,2,5,4,8,3,7]))