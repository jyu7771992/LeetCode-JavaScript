const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM';
let eachAirport = airports.split(' ');
// console.log(eachAirport);
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
]
//  | A | B | C | D |
//------------------|
// A|   | 1 | 1 |   |
//------------------|
// B| 1 |   |   |   |
//------------------|
// C| 1 |   |   | 1 |
//------------------|
// D|   | 1 |   |   |
//return like this

// A => B, C
// B => A
// C => A, D
// D => C 

// Adajency list
// key values pairs
const adjacencyList = new Map();
// add the node to the map
function addNode(airport){
    adjacencyList.set(airport, []);
}

// add edge, undirected, represent a node on on the graph to add an edge
// that we need to update the entries for both the origin Airport and the destination Airport
// entire API for building a graph as an adjacency list

function addEdge(origin, destination){
        let curOrigin = adjacencyList.get(origin);
        let curDesNTN = adjacencyList.get(destination);
        curOrigin.push(destination);
        curDesNTN.push(origin);
}

// create the graph
let airportLen = eachAirport.length;
for(let i = 0; i < airportLen; i++){
    addNode(eachAirport[i]);
}
// airports.forEach(addNode);
for(let route of routes){
    addEdge(...route);
}
// routes.forEach(route => addEdge(...route));
// console.log(adjacencyList)

// BFS: determins all the possible routes and know which one is the most efficient
function bfs(start){
    const visited = new Set();
    const queue = [start];//first item in first item out
    while(queue.length > 0){
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);
        for(const des of destinations){
            if(des === 'BKK') {
                console.log(des, 'found it BKK');
            }
            if(visited.has(des) !== true){
                visited.add(des);
                queue.push(des);
                // console.log(des);
            }
        }
        
    }
}

// bfs('PHX');
//Output:
//LAX
// JFK
// PHX
// MEX
// OKC
// HEL
// LOS
// BKK found it BKK
// BKK
// LIM
// EZE
// BKK found it BKK

// DFS
// find a route as quick as possible to approach the need
function dfs(start, visited = new Set()){
    // console.log(start);
    if(start === '') return '';
    visited.add(start);
    const destinations = adjacencyList.get(start);
    for(const des of destinations){
        if(des === 'BKK'){ // the base case
            // count how many steps to reach the destination
            console.log(`DFS found Bangkok ${steps} in steps`);
            return;
        }
        if(visited.has(des) !== true){
            steps++;
            console.log(visited);
            dfs(des, visited);
        }
    }
}
let steps = 1;
dfs('PHX');