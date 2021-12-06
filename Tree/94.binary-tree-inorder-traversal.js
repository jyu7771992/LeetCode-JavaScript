/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
/**
   * The goal is to maintain a stack of nodes to visit as we traverse 
   * down the tree. As we traverse down, We go left and push all the 
   * left nodes first in the stack. Once we reach to the bottom, we 
   * store the node value and traverse right.
   *           1
   *         /   \
   *        2     3    inorder traversal: 4 -> 2 -> 5 -> 1 -> 6 -> 3
   *       / \   /     (left -> root -> right)
   *      4   5 6
   */
var inorderTraversal = function(root) {
    let currentNode = root;
    const stack = [];
    const res = [];
    while(currentNode !== null || stack.length != 0){
        if(currentNode !== null){
            stack.push(currentNode);
            currentNode = currentNode.left;
        }else{
            currentNode = stack.pop();
            res.push(currentNode.val);
            currentNode = currentNode.right;
        }
    }
    return res;
};
// @lc code=end

