'use strict'

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.


// Exercise 1 Привет, object
let user = {};

user.name = 'John';
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);





//Exercise 2 Проверка на пустоту

function isEmpty (object) {
    // for (let key in object) {
    //     return false;
    // }
    // return true;
    return Object.keys(object) == '' ? true : false;
}

let schedule = {};

console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); 




//Exercise 4 Сумма свойств объекта

function countSumOfObject(obj) {
    let sum = 0;
    for (let worker in obj) {
        sum += obj[worker];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(countSumOfObject(salaries));



//Exercise 5 Умножаем все числовые свойства на 2

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

