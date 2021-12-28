/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (60.36%)
 * Likes:    3280
 * Dislikes: 112
 * Total Accepted:    795.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given the root of a binary tree, return the preorder traversal of its nodes'
 * values.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [1,null,2,3]
 * Output: [1,2,3]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = []
 * Output: []
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: root = [1]
 * Output: [1]
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: root = [1,2]
 * Output: [1,2]
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: root = [1,null,2]
 * Output: [1,2]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//DFS
//interate
//Top->Bottom
//Left->Right
//Why the rule of preorder traversal is left to the right, but the solution is the right first?
var preorderTraversal = function(root) { //[1,null,2,3]
    let stack = [], result = [];
    if(root === null){
        return result;
    }

    stack.push(root);// [1,null,2,3]
    console.log(stack.pop().val);
    while(stack.length !== 0){ //4
        let currentNode = stack.pop();//node 1
        result.push(currentNode.val); //1
        if(currentNode.right !== null){ 
            stack.push(currentNode.right);
        }
        if(currentNode.left !== null){
            stack.push(currentNode.left);
        }
    }
    return result;
};
//stack = [1, null, 2, 3];
//
// @lc code=end

