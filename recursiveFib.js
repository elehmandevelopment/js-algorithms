// given a number 'n' find the nth element of the Fibonacci sequence
// each num is the sum of the 2 preceding nums
// 0,1,1,2,3,5,8,13,21 ...
// Fn = Fn-1 + Fn-2 (needs base case or infinite loop)

function recursiveFib(n) {

    // base case:
    if ( n < 2) {
        return n
    }

    return recursiveFib(n-1) + recursiveFib(n-2);

}

console.log(recursiveFib(1));
console.log(recursiveFib(5));
console.log(recursiveFib(17));