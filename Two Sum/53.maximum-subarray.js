/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// @lc code=end
//Solution one: Dynamic Programming, Kadane's Algorithm

// Initialize 2 integer variables. Set both of them equal to the first value in the array.
// currentSubarray will keep the running count of the current subarray we are focusing on.
// maxSubarray will be our final return value. Continuously update it whenever we find a bigger subarray.
// Iterate through the array, starting with the 2nd element (as we used the first element to initialize our variables). For each number, add it to the currentSubarray we are building. If currentSubarray becomes negative, we know it isn't worth keeping, so throw it away. Remember to update maxSubarray every time we find a new maximum.

// Return maxSubarray.

var maxSubArray = function(nums) {
    //initialize the current value aand the max value
    let maxVal = nums[0];
    let currentVal = nums[0];
    // define the max value 
    for(let i = 1; i < nums.length; i++){
        let nextVal = nums[i];
        currentVal = Math.max(nextVal, currentVal + nextVal);
        maxVal = Math.max(currentVal, maxVal);
    }
    return maxVal;
};

//Solution two: Divided and Conquer
var maxSubArray = function(nums) {
    //two pointer
    //initialize the current value aand the max value
    let start = 0, end = nums.length - 1;
    let middle = Math.floor((start + end) / 2);
    let currentVal = nums[0];
    // define the max value 
    for(let i = 1; i < nums.length; i++){
        let nextVal = nums[i];
        currentVal = Math.max(nextVal, currentVal + nextVal);
        maxVal = Math.max(currentVal, maxVal);
    }
    return maxVal;
};