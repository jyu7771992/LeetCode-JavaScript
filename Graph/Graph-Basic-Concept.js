class Graph{
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    //create node
    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    // create edge
    addEdge(node1, node2){
        //undirected graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnections(){
        const allNodes = Object.keys(this.adjacentList);
        for(let node of allNodes){
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for(vertex of nodeConnections){
                connections += vertex + " ";
            }
            console.log(node + "->" + connections);
        }
    }
}
//directed graph: ex: one way
//undirected graph : ex: facebook friends connection
//Weighted Graph: Unweighted vs Weignted
//Cyclic vs Acyclic
// Directed Acyclic Graph : DAG
//const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]
const myGraph = new Graph();

console.log(myGraph.showConnections());
// Dijkstra + Bellman-Ford Algorithms: find shotest path between two nodes, like google map
//Bellman sort shortes path more better T: O(N)
