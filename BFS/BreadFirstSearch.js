
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){

    }
    lookup(value){

    }
    remove(value){

    }
    breadFirstSearch(){
        let currentNode = this.root;
        let list = [];
        let queue = []; // keep track of the level where we are so that we can access the children once we go through it.
        queue.push(currentNode);
        while(queue.length > 0){
            currentNode = queue.shift();// take the first item in the queue
            // take 9 first and push in the queue and assign 9 to the currentNode
            list.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return list;
    }

    breadFirstSearchR(queue, list){
        //reduce the fequency to build the list and queue
        if(!queue.length){// set up the condition which can stop the recursion loop
            return list;
        }
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
        return this.breadFirstSearchR(queue, list);
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.breadFirstSearch();
tree.breadFirstSearchR([tree.root], []);// this only works in class, so we could not use this.root
// tree
//    9
//  4   20
//1  6 15 170
// order = [9, 4, 20, 1, 6, 15, 170]
// pros: shortest path and closer nodes
// cons: more memory than DFS
// the link for space complexity and memory usage: https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr
function traverse(node){

}
//If you know a solution is not far from the root of the tree: BFS
//If the tree is very deep and solutions are rare: BFS (DFS will take long)
//If the tree is very wide: DFS (BFS will take more memory)
//If solutions are frequent but located deep in the tree: DFS
//Determing whether a path exists between two nodes: DFS
//Finding the shortest path: BFS
