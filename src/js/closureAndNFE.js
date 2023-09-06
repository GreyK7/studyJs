//CLOSURE


//Exercise 6 Сумма с помощью замыканий

function sum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));


//Exercise 8 Фильтрация с помощью функции
 function inBetween(start, end) {
    return function(item) {
        return item >= start && item <= end;
    }
}

function inArray(arr) {
    return function(item) {
        return arr.includes(item);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
console.log( arr.filter(inArray([1, 2, 10])) );



//Exercise 9 Сортировать по полю

function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1; 
    };
}



let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];


console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));



//Exercise 10 Армия функций

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        let number = i;
        let shooter = function() { // функция shooter
            console.log( number ); // должна выводить порядковый номер
        };
      shooters.push(shooter); // и добавлять стрелка в массив
      i++;
    }
  
    // ...а в конце вернуть массив из всех стрелков
    return shooters;
  }
  
  let army = makeArmy();
  
  // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
  console.log(army[0]()); // 10 от стрелка с порядковым номером 0
  console.log(army[1]()); // 10 от стрелка с порядковым номером 1
  console.log(army[2]()); 





//NFE 


//Exercise 1 Установка и уменьшение значения счётчика


// function makeCounter() {  //Свойство функции
    
//     function func() {
//         return func.count++;
//     }

//     func.count = 0;

//     func.set = function(number) {
//         func.count = number;
//     };

//     func.decrease = function() {
//         func.count--;
//     };

//     return func;
// }

function makeCounter() {  //Замыкание
    let count = 0;

    function func() {
        return count++;
    }

    func.set = function(number) {
        count = number;
    };

    func.decrease = function() {
        count--;
    };

    return func;
}


let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10); // установить новое значение счётчика

console.log( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log( counter() ); // 10 (вместо 11)