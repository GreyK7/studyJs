"use strict"

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