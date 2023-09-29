'use sctrict'

//Exercise 1 

let animal = {
    jumps: null
  };


let rabbit = {
    __proto__: animal,
    jumps: true
};
  
console.log( rabbit.jumps ); // ? (1)  //TRUE
  
delete rabbit.jumps;
  
console.log( rabbit.jumps ); // ? (2) //NULL
  
delete animal.jumps;
  
console.log( rabbit.jumps ); // ? (3) //UNDEFINED



//Exercise 2 Алгоритм поиска

// 1. С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// 2. Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.
// С точки зрения производительности, для современных движков неважно, откуда берётся свойство – из объекта или из прототипа. Они запоминают, где было найдено свойство, и повторно используют его в следующем запросе.
// Например, при обращении к pockets.glasses они запомнят, что нашли glasses в head, и в следующий раз будут искать там же. Они достаточно умны, чтобы при изменениях обновлять внутренний кеш, поэтому такая оптимизация безопасна.

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };

Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);

console.log(pockets.pen); // 3
console.log(bed.glasses); //1


//Exercise 3 Куда будет произведена запись?


let animal = {
    eat() {
      this.full = true;
    }
};
  
let rabbit = {
    __proto__: animal
};
  
rabbit.eat(); //rabbit polu4it full=true

console.log(rabbit);


//Exercise 4 Почему наедаются оба хомяка?

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
};
  
let speedy = {
    stomach: [],
    __proto__: hamster
};
  
let lazy = {
    stomach: [],
    __proto__: hamster
};
  
  // Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple

