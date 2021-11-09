/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //define the current value 
    let result =[];
    const newMap = new Map();
    for(let i = 0; i < nums.length; i++){
        if(newMap.has(target - nums[i])){// none value in it
            let remain = newMap.get(target - nums[i]);//get the value
            result.push(remain, i);
            return result;
   
        } else{//set values in Map
            newMap.set(nums[i], i);// key, value
        }
    }
    return[];
    //find the value is equal to 9-2
    //if find it, record the corresponding index
    //if didn't find it, set value in map to define new data structure
};
// @lc code=end


