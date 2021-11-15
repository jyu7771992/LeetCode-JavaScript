/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const start = 0;
    const end = 1;
    // sorting arrays first
    intervals.sort(sortFunction);
    let prev = intervals[0];
    let resultArr = [prev];//[[1,3]]
    for(let curVal of intervals){ //[[8,10],[15,18]]
        if(curVal[start] <= prev[end]){// 8 > 6
            prev[end] = Math.max(prev[end], curVal[end]);//[1, 6]
        } else {
            resultArr.push(curVal); //[8, 10],  
            prev = curVal; // compare to itself
        }
    }
    return resultArr;
};
// define the rules which based on sorting the first value in each array
function sortFunction(curVal, nextVal){
    if(curVal[0] === nextVal[0]){
        return 0;
    } else {
        return (curVal[0] < nextVal[0]) ? -1 : 1;
    }
}
    
// @lc code=end
// the first value to compare with the second one
// check if the first value in the next array which is overlapped the range og the first array, I will shift this overlapped value
//check if the second value in the previus array which is included in the range of the second array, I will pop .. value


//[[1],[6],[8,10],[15,18]]
//  mergeArr.push(currentVal[start], nextValue[end]);    |     