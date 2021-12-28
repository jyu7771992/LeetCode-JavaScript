/*
 * @lc app=leetcode id=863 lang=javascript
 *
 * [863] All Nodes Distance K in Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
//graph-bfs
var distanceK = function(root, target, k) {
    let m = new Map();
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.left) {
            m.set(node.left, node);
            queue.push(node.left);
        }
        if (node.right) {
            m.set(node.right, node);
            queue.push(node.right);
        }
    }
    // (key, value) in m is (child, parent)
    
    let values = [], visited = new Map();
    queue = [{node: target, distance: 0}];
    
    while (queue.length > 0) {
        let {node, distance} = queue.shift();
        // if (visited.has(node)) continue;
        // we don't need this line but you can have it to play safe
        visited.set(node, 1);
        
        if (distance == k) {
            values.push(node.val);
            continue; // optimisation
        }

        if (node.left && !visited.has(node.left)) {
            queue.push({node: node.left, distance: distance + 1});
        }
        if (node.right && !visited.has(node.right)) {
            queue.push({node: node.right, distance: distance + 1});
        }
        if (m.has(node) && !visited.has(m.get(node))) {
            queue.push({node: m.get(node), distance: distance + 1});
        }
    }
    return values;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
// @lc code=end

