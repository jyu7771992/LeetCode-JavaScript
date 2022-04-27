/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */// two pointer//sort //雙向雙指針
var threeSum = function(nums) {
    // point the low one in the left side and point the high pointer in the right side
    let res = [];
    nums.sort((a, b)=> a - b);
    // point the first pointer to each value
    for(let i = 0; i < nums.length && nums[i] <= 0; i++){
        if(i == 0 || nums[i - 1] != nums[i]){
            twoSumII(nums, i , res);
        }
    }
    return res;
};

function twoSumII(nums, i , res){
    let low = i + 1, high = nums.length - 1;
    while(low < high){
        let sum = nums[i] + nums[low] + nums[high];
        if(sum < 0){
            low++;
        } else if(sum > 0){
            high --;
        } else{
            res.push([nums[i], nums[low++], nums[high--]]);
            while(low < high && nums[low] === nums[low - 1]){
                low++;
            }
        }
    }
}
// @lc code=end
// 

