/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 let graph;
 let visiting;
 let visited;

var canFinish = function(numCourses, prerequisites) {
    graph = new Map();
    visiting = new Set();
    visited = new Set();
    
    for(let [v, e] of prerequisites){
        let edges = graph.get(v) || [];
        edges.push(e);
        graph.set(v,edges);
    }
    
    for(const [v,e] of graph){
        if(has_cycle_dfs(v)){
            return false; //if cyclic it will not finish so it is false
        }
    }
    
    return true;
};

var has_cycle_dfs = function(v){
    visiting.add(v);
    let edges = graph.get(v);   // get all the edges to explore
    
    if(edges){
        //console.log(edges)
       for(let e of edges){
            if(visited.has(e)){ //skip if it is explored already
                continue;
            }

            if(visiting.has(e)){ //found e is being explored
                return true;
            }

            if(has_cycle_dfs(e)){ // DFS deeper if this e is cyclic
                return true;
            }
        } 
    }   
    
    visiting.delete(v); // remove from visiting set when all decedant v are visited
    visited.add(v);
    return false;
}
// @lc code=end

