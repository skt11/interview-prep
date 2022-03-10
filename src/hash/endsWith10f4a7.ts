import md5 from "md5";
// It is mainly a wrapper over
// recursive function printAllKLengthRec()
function printAllKLength(set,k)
{
    let n = set.length;
    printAllKLengthRec(set, "", n, k);
}
    
// The main recursive method
// to print all possible
// strings of length k
function printAllKLengthRec(set,prefix,n,k)
{
    // Base case: k is 0,
    // print prefix
    if (k == 0)
    {
        if(md5(prefix).endsWith("10f4a7")) {
            return console.log(prefix)
        }
        return;
    }
    
    // One by one add all characters
    // from set and recursively
    // call for k equals to k-1
    for (let i = 0; i < n; ++i)
    {
    
        // Next character of input added
        let newPrefix = prefix + set[i];
            
        // k is decreased, because
        // we have added a new character
        printAllKLengthRec(set, newPrefix,
                                n, k - 1);
    }
}
    
// Driver Code
let set1="abcdefghijklmnopqrstuvwxyz".split("");
let k = 4;
printAllKLength(set1, k);     