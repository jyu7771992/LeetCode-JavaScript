// Factorial means 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!
// 5! = 5 * 4 * 3!
//Write twon functions that finds the factorial of any number. 
//One should use recursive, the other should just use a for loop;

function findFactorialRecursive(number){
    // get lower and lower and hit to the base case: number 2 because 2* 1 = 2, so stop to the number two
    if(number === 2){
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}
// T: O(n) 

function findFactorialIterative(number){
    let answer = 1;
    if(number === 2){
        answer = 2;
    }
    for(let i = number; i >= 2; i--){
        answer = answer * i;
    }
    return answer;
}
//T: O(n)
console.log(findFactorialIterative(5));