function climbStairs(n: number): number {
    const lookUp = new Map<number, number>()
    lookUp.set(0, 1);
    lookUp.set(1, 1);
    return count(n, lookUp);
};

const count = (n: number, lookUp: Map<number, number>): number => {
    if(lookUp.has(n)) return lookUp.get(n);
    lookUp.set(n, count(n-1, lookUp) + count(n-2, lookUp))
    return lookUp.get(n);
}

 console.log(climbStairs(20))