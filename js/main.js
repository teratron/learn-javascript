"use strict";

let a = 5 + 8;
document.write("Результат операции: ", a.toString());
console.log(a);


let user = {name: "Tom", age: 24};
console.log(typeof user.name);
document.write(user.toString());


let strSum = prompt("Введите сумму вклада", '1000');
let strPercent = prompt("Введите процентную ставку", '10');
let sum = parseInt(strSum);
let percent = parseInt(strPercent);
sum = sum + sum * percent / 100;
alert("После начисления процентов сумма вклада составит: " + sum);


let people = ["Tom", "Alice", "Sam"];
console.log(people);
console.log(people[0]);


people = [
  ["Tom", 25, false],
  ["Bill", 38, true],
  ["Alice", 21, false]
];
console.log(people[0]); // ["Tom", 25, false]
console.log(people[1]); // ["Bill", 38, true]


let users = ["Tom", "Bob", "Sam"];
for (let value of users) console.log(value);


let z = 10;

function displayZ() {
  let z = 20;
  {
    let z = 30;
    console.log("Block:", z);
  }
  console.log("Function:", z);
}

displayZ();
console.log("Global:", z);


let calculator = (function () {
  let data = {number: 0};
  return {
    sum: function (n) {
      data.number += n;
    },
    subtract: function (n) {
      data.number -= n;
    },
    display: function () {
      console.log("Result: ", data.number);
    }
  }
})();
calculator.sum(10);
calculator.sum(3);
calculator.display();   // Result: 13
calculator.subtract(4);
calculator.display();   // Result: 9


function getFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  } else {
    return getFibonacci(n - 1) + getFibonacci(n - 2);
  }
}

console.log(getFibonacci(8));
let result = getFibonacci(8); //21
console.log(result); // 21


display();

function display() {
  console.log("Hello Hoisting"); // Hello Hoisting
}


let school = {
  title: "Oxford",
  courses: ["JavaScript", "TypeScript", "Java", "Go"],
  printCourses: function () {
    let that = this;
    this.courses.forEach(function (course) {
      console.log(that.title, course);
    })
  }
};
school.printCourses();


let o = {
  bar: "bar3",
  foo: function () {
    console.log(this.bar);
  }
};
let bar = "bar1";
o.foo();    // bar3
console.log(bar);

