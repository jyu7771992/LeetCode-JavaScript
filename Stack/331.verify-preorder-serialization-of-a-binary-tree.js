/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 *
 * https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (43.35%)
 * Likes:    1540
 * Dislikes: 77
 * Total Accepted:    108.5K
 * Total Submissions: 249.9K
 * Testcase Example:  '"9,3,4,#,#,1,#,#,2,#,6,#,#"'
 *
 * One way to serialize a binary tree is to use preorder traversal. When we
 * encounter a non-null node, we record the node's value. If it is a null node,
 * we record using a sentinel value such as '#'.
 * 
 * For example, the above binary tree can be serialized to the string
 * "9,3,4,#,#,1,#,#,2,#,6,#,#", where '#' represents a null node.
 * 
 * Given a string of comma-separated values preorder, return true if it is a
 * correct preorder traversal serialization of a binary tree.
 * 
 * It is guaranteed that each comma-separated value in the string must be
 * either an integer or a character '#' representing null pointer.
 * 
 * You may assume that the input format is always valid.
 * 
 * 
 * For example, it could never contain two consecutive commas, such as
 * "1,,3".
 * 
 * 
 * Note: You are not allowed to reconstruct the tree.
 * 
 * 
 * Example 1:
 * Input: preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
 * Output: true
 * Example 2:
 * Input: preorder = "1,#"
 * Output: false
 * Example 3:
 * Input: preorder = "9,#,#,1"
 * Output: false
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= preorder.length <= 10^4
 * preorder consist of integers in the range [0, 100] and '#' separated by
 * commas ','.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
//前序遍歷 root-> left.node->right.node
//use stack to record if the value is not "#", one parent node has 2 nodes
//there is no peek function in JS, so you have to implement peek yourself
var isValidSerialization = function(preorder) {
    let stack = preorder[0] === '#' ? [] : [2];
    let reconPreorder = preorder.split(',').slice(1);
    console.log(reconPreorder);
    for(let val of reconPreorder){//#
        if(stack.length === 0){   
            stack.push(0);
        }
        // lastElement in Array: stack[stack.length - 1];//[1]
        (stack[stack.length - 1] === 1) ? stack.pop() : stack[stack.length - 1]--;// 2-1 ==1
        if(val !== "#"){
            stack.push(2);[2]
            console.log(stack);
        }
    }
	
    return !stack.length;//true
};
// @lc code=end

//