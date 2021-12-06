/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var serializeDFS = function(root, str) {
    if (root == null) {
        return str += "*,";
    } else {
        str += root.val+",";
        str = serializeDFS(root.left, str);
        str = serializeDFS(root.right, str);
    }
    return str;
};


var deserializeDFS = function(data) {
    let nodes = data.split(',');

    var recur = function() {
        let next = nodes.shift();
        if (next == "*") {
            return null;
        } else {
            let node = new TreeNode(next);
            node.left = recur();
            node.right = recur();
            return node;
        }
    }

    return recur();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
