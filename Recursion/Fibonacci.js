//Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,...
// the pattern of the sequence is that each value is the sum of the 2 previous values, 
// that means that for N = 5 -> 2 + 3
//0( 2^n)
// n  = 3-> 1+2
function fibonacciIterative(n){//O(n)
    //code here;
    let arr = [0, 1];//strat with the index 2
    for(let i = 2; i <= n; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    console.log(arr);
    return arr[n];
    
}

console.log(fibonacciIterative(8));
//T: O(2^n)
function fibonacciRecursive(n){
    if(n < 2) return n;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

fibonacciRecursive(3);
//exponential time