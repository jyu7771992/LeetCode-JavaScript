/*
 * @lc app=leetcode id=785 lang=javascript
 *
 * [785] Is Graph Bipartite?
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    //DFS
    const color = new Map;//why use Map?
    const stack = [];
    for(let i = 0; i < graph.length; i++){
        if(color.has(i)){
            continue;
        }
        color.set(i, true); 
        stack.push(i);
        while(stack.length > 0){
            let current = stack.pop();
            for(let neighbor of graph[current]){
                if(!color.has(neighbor)){
                    color.set(neighbor, !color.get(current));
                    stack.push(neighbor);
                    continue;
                }
                if(color.get(neighbor) === color.get(current)) return false;
            }
        }
    }

    return true;
};


// @lc code=end

