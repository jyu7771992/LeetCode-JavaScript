/*
 * @lc app=leetcode id=662 lang=javascript
 *
 * [662] Maximum Width of Binary Tree
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
 * @return {number}
 */
//DFS
var widthOfBinaryTree = function(root) {
    const minPos = [0];
    let maxWidth = 0;
    
    depthSearch(root, 0, 0);
    return maxWidth;
    
    function depthSearch(node, level, pos) {
        if(!node) return;
        if(minPos[level] === undefined) minPos.push(pos);
        
        const diff = pos - minPos[level];
        maxWidth = Math.max(maxWidth, diff+1);
        
        depthSearch(node.left, level+1, diff*2);
        depthSearch(node.right, level+1, diff*2+1);
    }
};
// @lc code=end

