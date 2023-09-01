'use strict'



//Exercise 1 Деструктурирующее присваивание

let user = {
    name: "John",
    years: 30
  };


let { name, years: age, isAdmin = false } = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); 



//Exercise 2 Максимальная зарплата

function topSalary(obj) {
    let topSalaryName = null;
    let salaryAmount = 0;
    for ( let [name, salary] of Object.entries(obj)) {
        if (salary > salaryAmount) {
            salaryAmount = salary;
            topSalaryName = name;
        }
    }
    return topSalaryName;
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));