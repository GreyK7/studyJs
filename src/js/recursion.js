'use strict';

//Exercise 1 Вычислить сумму чисел до данного

function sumTo(n) {
    return n === 1 ? n : n + sumTo(n - 1);
}

console.log(sumTo(100));



//Exercise 2 Вычислить факториал

function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}


console.log(factorial(5));


//Exercise 3 Числа Фибоначчи

// function fib(n) { /// Рекурсивоное решение
//     if (n <= 2) {
//         return 1;
//     } else {
//         return fib(n - 1) + fib (n - 2);
//     }
// }

function fib(n) {
    let first = 1;
    let second = 1;

    for ( let i = 3; i <= n; i++) {
        [second, first] = [second + first, second];
    }
    return second;
}


console.log(fib(77));



//Exercise 4 Вывод односвязного списка

function printList(list) { 
    // console.log(list.value); //Рекурсивное решение 
    // return list.next ? printList(list.next) : undefined;
    let next = list;
    while (next) {
        console.log(next.value);
        next = next.next;
    }
}



let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

printList(list);



//Exercise 5 Вывод односвязного списка в обратном порядке

function printReverseList(list) { 
//     if (list.next) {                 //Рекурсивное решение
//         printReverseList(list.next);
//     }
//     console.log(list.value);
    let next = list;
    let answer = [];
    while (next) {
        answer.push(next.value);
        next = next.next;
    }
    for (let i = answer.length - 1; i >= 0; i--) {
        console.log(answer[i]);
    }
}



let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

printReverseList(list);
