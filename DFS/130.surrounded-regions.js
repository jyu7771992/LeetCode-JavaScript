/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// input
// board = [
    //  j=0  1   2   3
//  i=0["X","X","X","X"],
//    1["X","O","O","X"],
//    2["X","X","O","X"],
//    3["X","O","X","X"]
// ]
var solve = function(board) {
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === 'O' && (i === 0 || j === 0 || i === board.length - 1 || j === board[0].length - 1)) {
                dfs(i, j);
            }
        }
    }

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === 'Visited') {
                board[i][j] = 'O';
            } else  {
                board[i][j] = 'X';
            }
        }    
    }
    
    function dfs(i, j) {
        if(i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] === 'Visited' || board[i][j] === 'X') return
        
        board[i][j] = 'Visited';
        dfs(i + 1, j);//up
        dfs(i - 1, j);//down
        dfs(i, j + 1);//right
        dfs(i, j - 1);//left
        
        return;
    }
};
// @lc code=end

