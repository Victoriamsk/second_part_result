//Задание 1

let a = 8;

if(a % 2 == 0) {
    console.log('Четное');
} else {
    console.log('Нечетное')
}

a += 1;
console.log(a);

//Задание 2

for (let i = 0; i < 1000; i++) {
    if (i % 2 != 0 || i % 12 === 0) {
        console.log(i);
    } 
}

//Задание 3

let array = [1, 10, 15, -100, -23, 19, 15032];
let array2 = array.map((num) => num * 0.25);
console.log(array2);

//Задание 4

// function sayHello(name) {
//     console.log('Hello, ' + name + '!');
//  }

let sayHello = (name) => console.log('Hello, ' + name + '!');

 sayHello('Alex');

 //Задание 5

 function calc (a, b, operation) {
    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
        return a / b;
    } 
 }

 console.log(calc(3, 4, '+'));
 console.log(calc(3, 4, '-'));
 console.log(calc(3, 4, '*'));
 console.log(calc(3, 4, '/'));
 
 //Задание 6

let age = 5;
let category = age >= 18 ? "Взрослый" : "Детский"

console.log(category);

//Задание 7

let a = 5;
let b = 8;
let c = a > b ? a : b

 console.log(c);