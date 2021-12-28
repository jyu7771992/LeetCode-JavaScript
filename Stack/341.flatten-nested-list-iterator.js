/*
 * @lc app=leetcode id=341 lang=javascript
 *
 * [341] Flatten Nested List Iterator
 *
 * https://leetcode.com/problems/flatten-nested-list-iterator/description/
 *
 * algorithms
 * Medium (57.51%)
 * Likes:    2832
 * Dislikes: 978
 * Total Accepted:    264.2K
 * Total Submissions: 457.3K
 * Testcase Example:  '[[1,1],2,[1,1]]'
 *
 * You are given a nested list of integers nestedList. Each element is either
 * an integer or a list whose elements may also be integers or other lists.
 * Implement an iterator to flatten it.
 * 
 * Implement the NestedIterator class:
 * 
 * 
 * NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with
 * the nested list nestedList.
 * int next() Returns the next integer in the nested list.
 * boolean hasNext() Returns true if there are still some integers in the
 * nested list and false otherwise.
 * 
 * 
 * Your code will be tested with the following pseudocode:
 * 
 * 
 * initialize iterator with nestedList
 * res = []
 * while iterator.hasNext()
 * ⁠   append iterator.next() to the end of res
 * return res
 * 
 * 
 * If res matches the expected flattened list, then your code will be judged as
 * correct.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: nestedList = [[1,1],2,[1,1]]
 * Output: [1,1,2,1,1]
 * Explanation: By calling next repeatedly until hasNext returns false, the
 * order of elements returned by next should be: [1,1,2,1,1].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nestedList = [1,[4,[6]]]
 * Output: [1,4,6]
 * Explanation: By calling next repeatedly until hasNext returns false, the
 * order of elements returned by next should be: [1,4,6].
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= nestedList.length <= 500
 * The values of the integers in the nested list is in the range [-10^6,
 * 10^6].
 * 
 * 
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
//stack or queue
let queue = [];
var NestedIterator = function(nestedList) {
    traveralArr(nestedList);
};

var traveralArr = function(nestedList){
    let size = nestedList.length;
    for(let i = 0; i < size; i++){
        if(nestedList[i].isInteger()){
            queue.push(nestedList[i].getInteger());
        } else{
            traveralArr(nestedList[i].getList());
        }
    }
}


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return (queue.length > 0);
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return queue.shift();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// @lc code=end

