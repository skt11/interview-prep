function maxProfit(prices: number[]): number {
    
    const profitMap = new Map<number, number>()
    let globalMax = 0;
    
    for (let i = 0 ; i < prices.length-1 ; i++) {
        
        if(profitMap.has(prices[i])) continue
        let localMax = 0;
        
        for(let j = i+1 ; j < prices.length ; j++) {
            if(prices[j] > prices[i]){
                localMax = Math.max(localMax, prices[j]-prices[i])
            }
        }
        profitMap.set(prices[i], localMax)
        globalMax = Math.max(localMax, globalMax)
    }
    return globalMax;
};

function maxProfitGreedy(prices: number[]): number {
    let leftMin = prices[0]
    let profit = 0
    for(let i = 0; i < prices.length ; i++){
        leftMin = Math.min(prices[i], leftMin)
        profit = Math.max(prices[i]-leftMin, profit)
    }
    return profit;
}