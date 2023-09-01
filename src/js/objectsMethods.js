'use strict'



//Exercise 2 Создайте калькулятор


let calculator = {
    read: function() {
        this.a = +prompt('Enter a: ', 0);
        this.b = +prompt('Enter a: ', 0);
        },   
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
};
  
calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );


//Exercise 3 Цепь вызовов

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      console.log( this.step );
      return this;
    }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep();