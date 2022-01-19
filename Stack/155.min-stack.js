/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 *
 * https://leetcode.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (48.85%)
 * Likes:    6847
 * Dislikes: 564
 * Total Accepted:    871.8K
 * Total Submissions: 1.8M
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n' +
  '[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 * 
 * Implement the MinStack class:
 * 
 * 
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * 
 * Output
 * [null,null,null,null,-3,null,0,-2]
 * 
 * Explanation
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top();    // return 0
 * minStack.getMin(); // return -2
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * -2^31 <= val <= 2^31 - 1
 * Methods pop, top and getMin operations will always be called on non-empty
 * stacks.
 * At most 3 * 10^4 calls will be made to push, pop, top, and getMin.
 * 
 * 
 */

// @lc code=start
let stack;
var MinStack = function() {
    stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    return stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function(val) {
    return stack.pop(val);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return stack[stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = stack[0];
    for(let i = 1; i < stack.length; i++){
        min = Math.min(min, stack[i]);
    }
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
//Undemy class: Stack
class Node{
    constructor(){
        this.value = value;
        this.next = null;
    }
}
class MinStack{
    constructor(){
        // this.top = null;
        // this.bottom = null;
        // this.length = 0;
        this.array = [];
    }
    push(value){
        // const newNode = new Node(value);
        // if(this.length === 0){
        //     this.top = newNode;
        //     this.bottom = newNode;
        // } else{
        //     const holdingPointer = this.top;
        //     this.top = newNode;
        //     this.top.next = holdingPointer;
        // }
        // this.length++;
        this.array(value);
        return this;
    }
    pop(){
        // if(!this.top){
        //     return null;
        // }
        // if(this.top === this.bottom){
        //     this.bottom = null;
        // }
        // //const holdingPointer = this.top;////store the upcoming deleted value, because JS is garbage collected
        // this.top = this.top.next;// define the new last value in the array, replace the top
        // this.length--;//reduce the length of the array
        this.array.pop();
        return this;
    }
    getMin(){
        if(this.length === 0){
            return null;
        }
        let min = this[0];//define the first min
        for(let i = 1; i < this.length - 1; i++){
            min = Math.min(min, this[i]);
        }
        return min;
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
console.log(minStack)

