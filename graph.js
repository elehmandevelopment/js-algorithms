const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

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
];

// represent graph as adjacency lists so that we don't take up unneccessary space & increase efficiency

// Map is working similar to hash map 
const adjacencyList = new Map();

// build graph (nodes & edges) as adjacency list

function addNode(airport) {
    adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))

console.log(adjacencyList);



// DFS Depth First Search

function dfs(start, visited = new Set()) {
    
    console.log(start)

    visited.add(start);

    const destinations = adjacencyList.get(start);

    for (const destination of destinations) {

        if (destination === 'BKK') {
            console.log('^DFS found Bangkok');
            return;
        }

        if (!visited.has(destination)) {
            dfs(destination, visited);
        }
    }
}
dfs('PHX')