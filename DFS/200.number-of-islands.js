/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
     // count the number of island

    const depthSearch = (row, col) => {
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === '0') return;
        
        grid[row][col] = '0';
        
        depthSearch(row - 1, col); // up
        depthSearch(row + 1, col); // down
        depthSearch(row, col - 1); // left
        depthSearch(row, col + 1); // right
    }
    
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        
        for(let j = 0; j < grid[i].length; j++) {
            
            if(grid[i][j] === '1') {
                count++;
                depthSearch(i, j)
            }
        }
    }
    return count;
};
// @lc code=end

