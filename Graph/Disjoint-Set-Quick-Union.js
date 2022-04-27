class UnionFind{
    constructor(){
        this.root = [];
    }

    UnionFind(size){//O(N)
        this.root = new Array(size);
        for(let i = 0; i < this.root.length; i++){
            this.root[i] = i;
        }
    }

    find(x){ //O(N)
        while(x != this.root[x]){
            x = this.root[x];
        }
        return x;
    }

    union(x, y){// O(N)
        let rootX = this.find(x), rootY = this.find(y);
        if(rootX !== rootY){
            this.root[rootY] = rootX;
        }
    }

    connected(x, y){// O(N)
        return this.find(x) == this.find(y);
    }

}
// N is the number of vertices in the graph, 
//in the worse case: the number of operations to get the root vertex will be H (the height of the tree) 
let myUnionFind = new UnionFind(10);

//1-2-5-6-7  4
myUnionFind.UnionFind(10);
myUnionFind.union(1, 2);
myUnionFind.union(2, 5);
myUnionFind.union(5, 6);
myUnionFind.union(6, 7);
//3-8-9
myUnionFind.union(3, 8);
myUnionFind.union(8, 9);

console.log('1, 5', myUnionFind.connected(1, 5));
console.log('5, 7',myUnionFind.connected(5, 7));
console.log('4, 9',myUnionFind.connected(4, 9));
myUnionFind.union(4, 9);
console.log('4, 9', myUnionFind.connected(4, 9));