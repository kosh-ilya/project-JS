"use strict";

const obj = {
  name: "Ilya",
  age: 33,
  isMarried: true,
};

let array = ["plum.png", "apple.jpg", "orange.png", 6];

console.log(array[5]);

//let result = confirm("kjdfnkj");
//console.log(result);

//let answer = prompt("Вам есть 18?", "18");
//console.log(typeof answer);
const answers = [];

//answers[0] = prompt("Как вас зовут?", " ");
//answers[1] = prompt("сколько вам лет?", " ");
//answers[2] = prompt("что делаете?", " ");

//document.write(answers);
const category = "toys";
console.log(`https//toys.ru/${category}/string/5/`);

const user = {
  name: "Ilya",
  age: 35,
};

alert(`Привет, ${user.name}  ${user.age}`);

let incr = 10,
  decr = 10;

++incr;
--decr;

console.log(decr);

const isChecked = false,
  isClose = false;

console.log(isChecked || !isClose);

console.log(2 + 2 * 2 !== 6);
