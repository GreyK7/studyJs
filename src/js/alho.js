"use strict"


//Поиск в ширину
let graph = {};

graph ["you"] = [ "alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"]; 
graph["claire"] = ["thom", "jonny"]; 
graph["anuj"] = []; 
graph["peggy"] = [] ;
graph["thom"] = [] ;
graph["jonny"] = [];

function searchMangoSeller(name) {
    return name.endsWith('m');
}


function findHill(start) {
    let que = start.slice();
    let checked = [];
    while ( que.length !== 0 ) {
        let person = que.shift();
        if (!checked.includes(person)) {
            if (searchMangoSeller(person)) {
                return person; 
            } else {
                que = que.concat(graph[person]);
                checked.push(person);
            } 
        } 
    }
    return "no mango seller";
}

console.log(findHill(graph['you']));


//Алгоритм Дейкстры

// let graph = {
//     'start': {'a': 6, 'b': 2},
//     'a': {'end': 1},
//     'b': {'a': 3, 'end': 5}
// }

// let costs = {
//     'a': 6,
//     'b': 2,
//     'end': Infinity
// }

// let parents = {
//     'a': 'start',
//     'b': 'start',
//     'end': null
// }

// function findLowestNode(costs) {
//     let array = Object.entries(costs);
//     let lowest = array[0][1];
//     let lowestNode = array[0][0];
//     array.forEach(item => {
//         if (item[1] < lowest) {
//             lowest = item[1];
//             lowestNode = item[0];
//         }
//     });
//     return lowestNode;
// }


// function searchDeks (start) {
//     let lowestNode = findLowestNode(costs);
//     while (lowestNode) {
//         let cost = costs[lowestNode];
//         let neighbours = graph[lowestNode];
//     }
// }


// console.log(searchDeks(graph['start']));