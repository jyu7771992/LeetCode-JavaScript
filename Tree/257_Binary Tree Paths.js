
class TreeNode{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

function traverse(node){
    const tree = {value: node.value};
    tree.left = (node.left === null) ? null : traverse(node.left);
    tree.right = (node.right === null) ? null : traverse(node.right);
    return tree;
}
class binaryTreePaths{
    //create object
    constructor(){// create new instant values in the binaryTreePath
        this.root = null;
    }

    travel(node, path){
        //render the connected arrow
        if(!node.left && !node.right){
            this.result.push(path.join('->'));
        }
        //if left child exists, keep going
        if(node.left !==null){
            this.travel(node.left, [...path, node.left.val]);
        }
        //if rught child exists, keep going
        if(node.right !==null){
            this.travel(node.right, [...path, node.right.val]);
        }
    }    
    
};
var newTree = new TreeNode();
newTree(1);
newTree(2);
newTree(3);
newTree();
newTree(5);

const tree = new BinarySearchTree();
JSON.stringify(traverse(tree.root));
console.log(newTree);