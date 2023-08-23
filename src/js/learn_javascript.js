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
