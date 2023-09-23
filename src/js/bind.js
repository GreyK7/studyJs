'use strict';

//Exercise 4 Исправьте функцию, теряющую "this"

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }
  
//   let user = {
//     name: 'Вася',
  
//     loginOk() {
//       console.log(`${this.name} logged in`);
//     },
  
//     loginFail() {
//       console.log(`${this.name} failed to log in`);
//     },
  
//   };
  

// let logOk = user.loginOk.bind(user);
// let logFail = user.loginFail.bind(user);


// askPassword(logOk, logFail);


//Exercise 5 Использование частично применённой функции для логина

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?