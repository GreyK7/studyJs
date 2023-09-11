'use strict';


//Exercise 1 Создайте список

// let ul = document.createElement('ul');

// function addListItems() {
//     let result = [];
//     let timer = true;
//     while (timer) {
//         let content = prompt('Enter content: ', '')?.trim();
//         if (content === undefined || content === '') {
//             timer = false;
//         } else {
//             let li = document.createElement('li');
//             li.append(content);
//             result.push(li);
//         }
//     }
//     return result;
// }

// ul.append(...addListItems());

// document.body.append(ul);



//Exercise 2 Создайте дерево из объекта

let container = document.getElementById('container');

let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {
            "krasivaya": {}
        },
        "магнолия": {}
      }
    }
  };




function createTree(container, obj) {
    let ul = document.createElement('ul');
    for (let item in obj) {
        let li = document.createElement('li');
        li.textContent = item;
        ul.append(li);
        createTree(ul, obj[item]);
    } 
    container.append(ul);
}


createTree(container, data);


//Exercise 3 Выведите список потомков в дереве

// function createTreeWithAmount(container, obj) {
//     let ul = document.createElement('ul');
//     for (let item in obj) {
//         let amount = Object.keys(obj[item]).length;
//         let li = document.createElement('li');
//         li.textContent = amount > 0 ? `${item}[${amount}]` : item;
//         ul.append(li);
//         createTreeWithAmount(ul, obj[item]);
//     } 
//     container.append(ul);
// }


// createTreeWithAmount(container, data);

//Exercise 4