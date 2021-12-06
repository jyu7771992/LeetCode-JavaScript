/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
//preorder
//bfs iterate
var sumNumbers = function(root) {
    //topdown
    if (!root) {
        return root;
    }
    
    let stack = [];
    let ans = 0;

    stack.push([root, root.val]);
    
    while(stack.length) {
        const [node, sum] = stack.pop();

        if (!node.left && !node.right) {
            ans += sum;
        } 
        
        if(node.right) {
            stack.push([node.right, sum * 10 + node.right.val])
        }
        
        if(node.left) {
            stack.push([node.left, sum * 10 + node.left.val])
        }
     }
    
    return ans;
};
//recursion
/*var sumNumbers = function(root, sum = '') {
    if(!root) return 0;

    sum += root.val;
    if(!root.left && !root.right) return parseInt(sum);

    return sumNumbers(root.left, sum) + sumNumbers(root.right, sum);
};*/
// @lc code=end

