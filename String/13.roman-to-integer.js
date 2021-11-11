/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //record each of symbol in this object
    const symbolObject = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let finalSum = 0;//define the variable called finalSum is equal to zero;
    //
    for(let i = 0; i < s.length; i+=1){ 
        let curValue = symbolObject[s[i]]; //100
        let nextValue = symbolObject[s[i+1]] // 1
        if(curValue < nextValue){ //
            finalSum -= curValue; // 1990 - 1 = 1899
        } else {//1000 > 10
            finalSum += curValue;// 1890 + 100 = 1990
        }
    }
    return finalSum;
};
// @lc code=end
//MCMXCIV
//     vV
//curVal = 1
//next = 5
//final = 1990

