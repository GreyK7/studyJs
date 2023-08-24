//Array's methods


//Exercise 1 Переведите текст вида border-left-width в borderLeftWidth

function camelize(str) {
    return str.split('-').map((item, index) => !index ? item : item[0].toUpperCase() + item.slice(1)).join('');
}

let str = 'list-style-image';

console.log(camelize(str));



//Exercise 2 Фильтрация по диапазону (не меняя исходный массив)

function filterRange(arr, start, end) {
    return arr.filter( item => item >= start && item <= end);
}

let arr = [5, 3, 8, 1];

console.log(filterRange(arr, 1, 4));




//Exercise 3 Фильтрация по диапазону "на месте" (меняя исходный массив)

function filterRangeInPlace(arr, start, end) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < start || arr[i] > end) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

let arr = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr, 1, 4));




//Exercise 4 Сортировать в порядке по убыванию

function downSort(arr) {
    return arr.sort((a, b) => b - a);
}

let arr = [5, 2, 1, -10, 8];

console.log(downSort(arr));




//Exercise 5 Скопировать и отсортировать массив

function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(arr);
console.log(sorted);


console.log('𝒳😂'.slice(1, 2).codePointAt(1));




//Exercise 6 Создать расширяемый калькулятор

function Calculator() {
    this['+'] = function (a, b) {
        return +a + +b;
    };
    this['-'] = function (a, b) {
        return +a - +b;
    };
    this.calculate = function (string) {
        let data = string.split(' ');
        return this[data[1]](data[0], data[2]);
    };
    this.addMethod = (name, action) => {
        this[name] = action;
    };
}

let powerCalc = new Calculator;
let calc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

console.log(result);
console.log(calc.calculate('4 - 3'));



//Exercise 7 Трансформировать в массив имён

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log(names);



//Exercise 8 Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
    fullName: item.name + ' ' + item.surname,
    id: item.id
}))

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName )




//Exercise 9 Отсортировать пользователей по возрасту

function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name);




//Exercise 10 Перемешайте массив ?????????????????????????????????????????????????????????????????????????????



//Exercise 11 Получить средний возраст

function getAverageAge(arr) {
    return arr.reduce((sum, item ) => sum + item.age, 0) / arr.length;
}


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28



//Exercise 12 Оставить уникальные элементы массива

function unique(arr) {
    return arr.reduce((newArr, item) => {
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
        return newArr;
    }, []);
  }
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
console.log( unique(strings) );




//Exercise 13 Создайте объект с ключами из массива


function groupById(arr) {
    return arr.reduce((res, item) => {
        res[item.id] = item;
        return res; 
    }, {});
}


let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
let usersById = groupById(users);

console.log(usersById);