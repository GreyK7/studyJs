'use strict'

//Exercise 1 Фильтрация уникальных элементов массива

function unique(arr) {
    // let array = [];
    // for (let item of (new Set(arr).values())) {
    //     array.push(item);
    // }
    // return array;
    return Array.from(new Set(arr));
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
console.log( unique(values) ); // Hare,Krishna,:-O



//Exercise 2 Отфильтруйте анаграммы

function filterAnagramm(array) {
    let list = new Map();
    for (let word of array) {
        let sortedKey = word.toLowerCase().split('').sort().join('');
        list.set(sortedKey, word);
    }
    return Array.from(list.values());
    // let list = new Set(array.map(item => item.split('').sort().join('').toUpperCase()));
    // return  array.filter(item => list.delete(item.split('').sort().join('').toUpperCase()));
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(filterAnagramm(arr));


//Exercise 3 Перебираемые ключи

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys);

