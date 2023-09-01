'use strict'

//Exercise 1 Две функции - один объект

let obj = {};
function A() { return obj }
function B() { return obj }

let a = new A();
let b = new B();

console.log( a == b );


//Exercise 2 Создайте калькулятор при помощи конструктора, new Calculator

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('Enter a: ', 0);
//         this.b = +prompt('Enter a: ', 0);
//         };   
//     this.sum =  function() {
//         return this.a + this.b;
//     },
//     this.mul = function() {
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();

// calculator.read();
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );




//Exercise 3 Создайте new Accumulator

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('Enter value:', 0);
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);