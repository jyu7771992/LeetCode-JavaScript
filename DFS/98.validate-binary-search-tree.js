/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 *
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (30.20%)
 * Likes:    9418
 * Dislikes: 873
 * Total Accepted:    1.4M
 * Total Submissions: 4.5M
 * Testcase Example:  '[2,1,3]'
 *
 * Given the root of a binary tree, determine if it is a valid binary search
 * tree (BST).
 * 
 * A valid BST is defined as follows:
 * 
 * 
 * The left subtree of a node contains only nodes with keys less than the
 * node's key.
 * The right subtree of a node contains only nodes with keys greater than the
 * node's key.
 * Both the left and right subtrees must also be binary search trees.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [2,1,3]
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is
 * 4.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the tree is in the range [1, 10^4].
 * -2^31 <= Node.val <= 2^31 - 1
 * 
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
 * @return {boolean}
 */
 //[2,1,3]-> ex:[1, 2, 3]; ex2: [5,1,4,null,null,3,6]-> [1, 5, 3, 4, 6]
// approach3: inorderTraversal: left -> root -> right
var isValidBST = function(root) {
    let prev = null; // because of in order traveral the previous value will be smaller than the next one
    function inorderTraversal(root){
       if(root == null) {
           return true;
       }
       if(inorderTraversal(root.left) !== true) return false; // if the left subtree is not a BST then return false first, so we will not wait for the right side to return false
       if(prev !== null && root.val <= prev) return false;
       prev = root.val // re assign the current value so we can compare to the next root

       return (inorderTraversal(root.right));
    }
    return inorderTraversal(root);
};
//T: O(N)
//S: O(N)

// @lc code=end
