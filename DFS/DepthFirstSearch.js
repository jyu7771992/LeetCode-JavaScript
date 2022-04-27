// low memory

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
    DFSInorder(){
        return traverseInorder(this.root, []);
    }
    DFSPostorder(){
        return traversePostorder(this.root, []);
    }
    DFSPreorder(){
        return traversePreorder(this.root, []);
    }
}
// tree
//    9
//  4   20
//1  6 15 170
//inorder = [1 ,4 ,6, 9, 15, 20, 170] left-> root -> right
function traverseInorder(node, list){
    if(node.left) traverseInorder(node.left, list);// keep tracking the left until no more left child
    list.push(node.value);// push current node
    if(node.right) traverseInorder(node.right, list); // and then tracking to the right child
    return list;
}
//preorder = [9, 4, 1, 6, 20, 15, 170] root-> left-> right : easier to recreate the tree by using preorder

function traversePreorder(node, list){
    list.push(node.value);// push current node
    if(node.left) traversePreorder(node.left, list);// keep tracking the left until no more left child
    if(node.right) traversePreorder(node.right, list); // and then tracking to the right child
    return list;
}
//postorder = [1, 6, 4, 15, 170, 20 ,9]left -> right -> root (bottom -> up)

function traversePostorder(node, list){
    if(node.left) traversePostorder(node.left, list);// keep tracking the left until no more left child
    if(node.right) traversePostorder(node.right, list); // and then tracking to the right child
    list.push(node.value);// push current node
    return list;// return as it reaches at the end
}
// The height of the tree will tell us how much memory we'll need because the height of the tree will match
// The deepest recursive function and that's what's going to be added to the stack as memory.
// so our memory comsumtion is of the heigt of the tree which give us the worst case scenario when using depth for a search
const depthFirstSearch = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// tree
//    9
//  4   20
//1  6 15 170
// order = [9, 4, 1, 6, 20, 15, 170]
//Three type of traversal
