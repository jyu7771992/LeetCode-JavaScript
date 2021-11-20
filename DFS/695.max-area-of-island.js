/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

//  We want to know the area of each connected shape in the grid, then take the maximum of these.

//  If we are on a land square and explore every square connected to it 4-directionally (and recursively squares connected to those squares, and so on), then the total number of squares explored will be the area of that connected shape.
 
//  To ensure we don't count squares in a shape more than once, let's use seen to keep track of squares we haven't visited before. It will also prevent us from counting the same shape more than once.

const maxAreaOfIsland = (grid) => {
    const res = { count: 0 }
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            dfs(grid, row, col, res)
        }
    }
    return res.count
};

const dfs = (grid, row, col, res, area = { count: 0 }) => {
    if (!grid[row] || !grid[row][col]) return
    res.count = Math.max(res.count, area.count += grid[row][col])
    grid[row][col] = 0
    dfs(grid, row, col - 1, res, area)
    dfs(grid, row, col + 1, res, area)
    dfs(grid, row - 1, col, res, area)
    dfs(grid, row + 1, col, res, area)
};

// @lc code=end

