'use strict';

//Exercise 1 Декоратор-шпион

function work(a, b, c) {
    console.log( a + b + c ); // произвольная функция или метод
}


function spy(func) {
    function saveFunc() {
        saveFunc.calls.push([...arguments]);
        return func.call(this, ...arguments);
    }
    saveFunc.calls = [];
    return saveFunc;
}


work = spy(work);

console.log(work(1, 2, 6)); // 3
console.log(work(4, 5, 9)); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
  

//Exercise 2 Задерживающий декоратор

function f(x) {
    console.log(x);
}
  
function delay(func, del) {
    return function() {
        setTimeout(() => func.apply(this, arguments), del);
    }
}



  // создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
  
f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс



//Exercise 3 Декоратор debounce

function debounce(func, ms) {
    let timer;
    return function() {
        let tempor = Date.now();
        if (timer === undefined || tempor - timer >= ms) {
            timer = tempor;
            func.apply(this, arguments);
        }
    }
}

//Alternativa iz knigi 
// function debounce(f, ms) {

//     let isCooldown = false;
  
//     return function() {
//       if (isCooldown) return;
  
//       f.apply(this, arguments);
  
//       isCooldown = true;
  
//       setTimeout(() => isCooldown = false, ms);
//     };
  
//   }

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500);


//Exercise 4 Тормозящий (throttling) декоратор

// function throttle(f, ms) {

//     let isCooldown = false;
//     let counter = 0;
//     let arg;
  
//     return function() {
//       if (isCooldown) {
//         arg = [...arguments];
//         return;
//       } 
  
//       f.apply(this, arguments);
//       counter++;
//       let tempor = counter;
//       isCooldown = true;
  
//       setTimeout(() => { 
//         isCooldown = false;
//         if (tempor === counter) {
//             f.apply(this, arg);
//         }
//       }, ms);
//     };
  
//   }

function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }

  function f(x) {
    console.log(x);
}

  let f1000 = throttle(f, 1000);

  f1000(1); // показывает 1
  setTimeout( () => f1000(4), 1000); // выполняется
  setTimeout( () => f(3), 1100); // проигнорирован (прошло только 100 мс)
  setTimeout( () => f(4), 2000); // выполняется
  setTimeout( () => f(5), 2100);

 

