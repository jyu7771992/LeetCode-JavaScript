/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root == null) return root;
    let queue = [root];
    while(queue.length!=0) {
        let next = [];
        while(queue.length!=0) {
            let node = queue.shift();
            node.next = queue[0]||null;
            if (node.left!=null) {
                next.push(node.left);
                next.push(node.right);
            }
        }
        queue = next;
    }
    return root;
};
// @lc code=end

