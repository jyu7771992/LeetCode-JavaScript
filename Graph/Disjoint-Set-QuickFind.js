class UnionFind{
    constructor(size){
        this.root = new Array(size);
    }

    UnionFind(size){
        for(let i = 0; i < size; i++){
            this.root[i] = i;
        }
    }

    findR(x){
        return this.root[x];
    }

    union(x, y){
        let rootX = this.findR(x), rootY = this.findR(y);
        if(rootX !== rootY){
            for(let i = 0; i < this.root.length; i++){
                if(this.root[i] == rootY){
                    this.root[i] = rootX;
                }
            }
        } 
    }

    connected(x, y){
        return this.findR(x) === this.findR(y);
    }

}

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

console.log(myUnionFind.findR(1));//true
console.log(myUnionFind.connected(1, 5));//true
console.log(myUnionFind.connected(2, 5));// true
console.log(myUnionFind.connected(5, 9));// False
console.log(myUnionFind.connected(4, 5));// False
