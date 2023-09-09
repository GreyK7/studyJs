'use strcit';

//Exercise 1 Вывод каждую секунду


let from = 1;
let to = 5;

function printNUmbers(from, to) {
    setTimeout(function check() {
        if (from < to) {
            console.log(from++);
            setTimeout(check, 1000, from, to)
        }
    }, 1000, from, to)
}

printNUmbers(from, to);
