/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 *
 * https://leetcode.com/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (43.71%)
 * Likes:    10117
 * Dislikes: 332
 * Total Accepted:    628.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,1,1]\n2'
 *
 * Given an array of integers nums and an integer k, return the total number of
 * continuous subarrays whose sum equals to k.
 * 
 * 
 * Example 1:
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 * Example 2:
 * Input: nums = [1,2,3], k = 3
 * Output: 2
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nums.length <= 2 * 10^4
 * -1000 <= nums[i] <= 1000
 * -10^7 <= k <= 10^7
 * 
 * 
 */
//{0: 1, 1: 1, 1: 2}
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // hashtable
    let map = new Map;
    let sum = 0;
    let count = 0;
    map.set(0, 1);
    console.log(map);
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        if(map.has(sum - k)){
            count = count + map.get(sum - k);
        }
    }
};
// @lc code=end

