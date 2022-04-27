//previously, for the union function, we choose the new root node for the other vertex; 
//yet, rank works by choosing the parent node based certain citeria, we can limit the maxium height of each vertex;
//"rank" refers to the height of each vertex


class UnionFind{
    constructor(size){
        this.root = new Array(size);
        this.rank = new Array(size);//record the height of each graph
    }

    UnionFind(size){//T:O(N)
        for(let i = 0 ; i < size; i++){
            this.root[i] = i;
            this.rank[i] = 1; // why is one?
        }
    }

    find(x){//T:O(logN+1) => O(logN)
        while(x !== this.root[x]){ // keep track the root if it is not the same as its parent node
            x = this.root[x];
        }
        return x;
    }

    union(x, y){//T:O(logN)
        let rootX = this.find(x), rootY = this.find(y);
        if(rootX !== rootY){
            if(this.rank[rootX] > this.rank[rootY]){
                this.root[rootY] = rootX;
            } else if(this.rank[rootX] < this.rank[rootY]){
                this.root[rootX] = rootY;
            } else{
                this.root[rootY] = rootX;
                this.rank[rootX] += 1;
            }
        }
    }

    connected(x, y){//T:O(logN)
        return this.find(x) == this.find(y);
    }
}
////1-2-5-6-7  4
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
myUnionFind.union(9, 4);
console.log('4, 9', myUnionFind.connected(4, 9));
//S: O(N)