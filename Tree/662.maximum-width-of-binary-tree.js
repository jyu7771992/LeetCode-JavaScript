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
//Like many fellow leetcoders, I struggled with the test case for a tree with +32 levels, that was getting my position math out of whack. Thanks to other posts, I implemented the solution for that edge case, which is setting the level width to 1 , if only 1 elem at that level.
// So, brief explanation:
// Do a level-order traversal (which is an off-the-shelf bfs but dequeuing on a sub-loop all nodes enqueued in previous level)
// when enqueuing nodes, extend node properties into an object that also includes a computed position
// compute a new position, just like you would do on a min / max heap :
// left child: parent pos * 2 + 1
// right child: parent pos * 2 + 2
// when de-queuing nodes, keep track of min and max position for that level
// after de-queuing all nodes for that level, compute width based on diff of max and min + 1 (so it is inclusive)
// update global max

var widthOfBinaryTree = function(root) {
    const queue = [{ node: root, pos: 0}];
    let maxWidth = 0;
    
    while(queue.length) {
        const levelLength = queue.length;

        let min = Number.MAX_VALUE,
            max = 0;

        for(let i = 0; i < levelLength; i++) {
            const curr = queue.pop();
            min = Math.min(min, curr.pos);
            max = Math.max(max, curr.pos);
            
            if(curr.node.left){
                queue.unshift({ node: curr.node.left, pos: curr.pos * 2 + 1 });
            } 

            if(curr.node.right){
                queue.unshift({node:curr.node.right, pos: curr.pos * 2 + 2 });
            } 
        }
        
        const levelWidth = levelLength === 1 ? 1 : max - min + 1;
        maxWidth = Math.max(maxWidth, levelWidth);
    }
    
    return maxWidth;
};
// @lc code=end

