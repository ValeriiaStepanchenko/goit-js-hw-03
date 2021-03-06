const countProps = function (obj) {
  "use strict";
  const prop = Object.keys(obj);
  return prop.length;
};

console.log(countProps({})); // 0
console.log(countProps({ a: 1, b: 1 })); // 2
console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5;

/*
Подсчет количества свойств в объекте
Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

Циклы не должны использоваться
*/
