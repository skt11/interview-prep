const fibSet = new Set<number>()

const table = new Map<number, number>();

function fib(n: number, table: Map<number, number>): number{
    if(n < 2) return n;
    if(n === 2) return 1;
    if(table.has(n)) {
        fibSet.add(table.get(n))
        return table.get(n)
    }
    table.set(n, fib(n-1, table) + fib(n-2, table))

}

console.log([1, 2, 3, 4].reduce((prev, curr) => prev+curr))

// console.log(fib(10, table))




