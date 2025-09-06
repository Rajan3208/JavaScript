# JavaScript Fundamentals Guide

A comprehensive collection of JavaScript concepts with practical examples, covering everything from basic data types to advanced array methods.

## Table of Contents

1. [Variables and Data Types](#variables-and-data-types)
2. [Memory Management](#memory-management)
3. [Strings](#strings)
4. [Numbers and Math](#numbers-and-math)
5. [Dates](#dates)
6. [Arrays](#arrays)
7. [Objects](#objects)
8. [Functions](#functions)
9. [Scope and Closures](#scope-and-closures)
10. [Arrow Functions](#arrow-functions)
11. [IIFE (Immediately Invoked Function Expression)](#iife)
12. [Control Flow](#control-flow)
13. [Loops](#loops)
14. [Array Methods](#array-methods)

---

## Variables and Data Types

Understanding variable declarations and type conversion in JavaScript.

```javascript
let score = "222212";
let numberInvalue = Number(score);
console.log(numberInvalue + 1);
console.log(typeof numberInvalue);
```

---

## Memory Management

JavaScript handles primitive and non-primitive data types differently - primitives are stored in stack (copied by value) while objects are stored in heap (copied by reference).

```javascript
let YoutubeName = "BarksApp"
let anothername = YoutubeName
anothername= "Alnexus-e"
console.log(YoutubeName);
console.log(anothername);

let userOne={
    name:"Rajan",
    email:"rajan@barkapps.com"
}
let userTwo = userOne
userTwo.email = "rajanish@barkapps.com"
console.log(userOne);
console.log(userTwo);
console.table([userOne, userTwo]);
```

---

## Strings

Working with string methods and properties in JavaScript.

```javascript
const str = "Hello, World!";
console.log(str.length);
console.log(str);

const gameName = new String("Rajjju");
console.log(gameName);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('j'));

const url = "https://www.barkapps.vercel.app";
console.log(url);
console.log(url.replace("https://", "http://"));
```

---

## Numbers and Math

Number formatting, precision, and mathematical operations.

```javascript
const otherNumber = 123.52323;
console.log(otherNumber.toPrecision(3));

const price = 1202212;
console.log(price.toLocaleString("en-IN"));

const max = 20;
const min = 10;
console.log(Math.ceil(Math.random()* (max-min-1))+min)
```

---

## Dates

Working with Date objects and their methods.

```javascript
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getTime());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.toLocaleDateString());
console.log(newDate.getMonth());
```

---

## Arrays

Array creation, manipulation, and useful methods.

```javascript
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

const arr = new Array(1, 2, 11, 4, 5);
console.log(arr);

arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

const Indian_heroes = ["Bhagat Singh", "Mahatma Gandhi", "Rani Lakshmibai", "Subhas Chandra Bose"];
const Bihari_heroes = ["Dr.Rajendra Prasad", "Shri Krishna Singh", "Jay Prakash Narayan", "Karpuri Thakur"];
const allheroes = Indian_heroes.concat(Bihari_heroes);

console.table(allheroes);
console.log(Array.isArray(allheroes));
console.log(allheroes.indexOf("Mahatma Gandhi"));
console.log(allheroes.includes("Mahatma Gandhi"));  
console.log(Array.from(allheroes));
```

---

## Objects

Object creation, property access, and nested objects.

```javascript
const js = {
    name:"JavaScript",
    age:25,
    framework:"React",
    library:"jQuery",
    version: "ES6",
    "fullname": "JavaScript ES6"
}

console.log(js.name);
console.log(js.age);
console.log(js.framework);
console.log(js.library);
console.log(typeof js.version);
console.log(js.fullname);

js.name = "Python";
console.log(js.name);
console.table(js);

js.greeting = function(){
    console.log("Hello, Welcome to " + this.name);
}
js.greeting();
```

### Nested Objects and Optional Chaining

```javascript
const laddu ={
    name:"Rosgulla",
    details:{
        shape:"round",
        color:"white",
        type:{
            base:"milk",
            filling:"khoya"
        },
        taste:"sweet"
    },
    price: 50,
    quantity: 100,
    dateofexpiry: "2025-12-31"
}
console.log(laddu.details.type.base);
console.log(laddu.details.type.filling);
console.log(laddu?.details?.type?.base);
```

---

## Functions

Function declarations, parameters, and return values.

```javascript
const raju = function() {
    console.log("Hello, I am Raju");
}
raju();

function add(a,b){
    return a+b;
}
console.log(add(2,3));

function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n* factorial(n-1);
}
const result = factorial(5);
console.log(result);

const anyobject = {
    name: "Rajan",
    age: 20,
    city: "Patna",
    occupation: "SDM or DSP"
};

function handleobject(anyobject){
    console.table(anyobject);
    console.log(`My Name is ${anyobject.name} and I am ${anyobject.age} years old my occupation is ${anyobject.occupation}.`);
}
handleobject(anyobject);
```

---

## Scope and Closures

Understanding variable scope and closure concepts.

```javascript
let a = 300;
if(true){
    let b = 400;
    let a = 100;
    console.log(a + b);
}
console.log(a);

function one(){
    const username = "Babua";
    function two(){
        const userage = 25;
        console.log("Username: " + username + ", Age: " + userage);
    }
    two();
}
one();
```

---

## Arrow Functions

Modern ES6 arrow function syntax and lexical `this` binding.

```javascript
function NormalFunc() {
  this.value = 100;
  setTimeout(function() {
    console.log(this.value);
  }, 1000);
}

function ArrowFunc() {
  this.value = 100;
  setTimeout(() => {
    console.log(this.value);
  }, 1000);
}

new NormalFunc();
new ArrowFunc();

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(5, 10));
```

---

## IIFE

Immediately Invoked Function Expressions for avoiding global scope pollution.

```javascript
(function rajan() {
  console.log("This is an IIFE");
})();

(
  () => {
    console.log("This is an LIFE");
  }
)();
```

---

## Control Flow

Conditional statements and switch cases.

```javascript
const score = 50;
if(score>100){
  const power = "glory";
  console.log(`You are a pro player with ${power} power`);
}else{
  console.log(`You are not a pro player ${score}`);
}

const UserLoggedIn = true; 
const debitCard = true;
if (UserLoggedIn && debitCard){
  console.log("You can purchase the course");
}else if(UserLoggedIn && !debitCard){
  console.log("Please add a debit card to purchase the course");
}
else{
  console.log("Please login to purchase the course");
}

const month =3;
switch (month){
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");  
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("Invalid month");
}

const age=18;
age>=18?console.log("You are eligible to vote"):console.log("You are not eligible to vote");
```

---

## Loops

Different types of loops including for, for-in, for-of, forEach, and while loops.

### For-in and For-of Loops

```javascript
const arr = [1,2,3,4,5];
const greetings = "Welcome to World of Rajan Singh";

for (const i in arr) {
  console.log(i); 
  console.log(arr[i]); 
}

for (const greets in greetings) {
  console.log(` Each char of greetings is at ${greets}`);
}

const programmingLanguages = ["JavaScript", "Python", "Flutter", "Dart", "C++"];

for (const lang in programmingLanguages) {
  console.log(`I love ${lang}`);
}
for (const lang of programmingLanguages) {
  console.log(`I love ${lang}`);
}
```

### While Loop

```javascript
let i = 0;
while (i < 5) {
    console.log(`While loop iteration: ${i}`);
    i++;
}

let countdown = 10;
while (countdown > 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}
console.log("Countdown finished!");
```

### Maps and Object Iteration

```javascript
const map = new Map();
map.set("name", "Rajan Singh");
map.set("age", 20);
map.set("occupation", "Developer");
console.log(map);

const myObeject = {
  id: 1,
  title: "My Object"
};
for (const [key, value] of Object.entries(myObeject)) {
  console.log(`${key}: ${value}`);
} 
```

---

## Array Methods

Advanced array methods including forEach, filter, map, and reduce.

### forEach Method

```javascript
const users = [
  {
    id: 1,
    name: "Rajan Singh",
    email: "rajan@barkapps"
  },
  {
    id: 2,
    name: "RK Singh",
    email: "rajan@barkapps"
  },
  {
    id: 3,
    name: "Rohan Singh",
    email: "rajan@barkapps"
  },
  {
    id: 4,
    name: "Vivek Singh",
    email: "rajan@barkapps",
  }
];

users.forEach( (user) => console.log(`User Name is ${user.name} and User Email is ${user.email}`));
```

### Filter Method

```javascript
const arr = [1,2,3,4,5,6,7,8,9,10];
const newNums = arr.filter((num)=> num%2===0);
console.log(newNums);

const books =[
  {
    title: "Book One",  
    genre: "Fiction",
    publishYear: 2018
  },
  {
    title: "Book Two",  
    genre: "Non-Fiction",
    publishYear: 2019
  },
  {
    title: "Book Three",  
    genre: "History",
    publishYear: 2020
  },
  {
    title: "Book Four",  
    genre: "Science",
    publishYear: 2021
  }
]

const userBooks = books.filter((bk) => bk.publishYear === 2019);
console.log(userBooks);
```

### Map Method
# In JavaScript, the .map() method is used to create a new array by applying a function to each element of the original array.

# It does not change the original array.
# It returns a new array with the transformed values.

```javascript
const MyNums = [1,2,3,4,5];
const newNums = MyNums.map((num)=> {
  return num*2;
})
console.log(newNums);
```

### Reduce Method

```javascript
const arr = [1,2,3,4,5];
const sum = arr.reduce((accumulator, currentValue) => {
  console.log(`Acc: ${accumulator}, Cur: ${currentValue}`);
  return accumulator + currentValue;
}, 0);
console.log(sum);

const ShoppingCart = [
  {
    id: 1,
    title: "Book One",
    price: 10.99,
  },
  {
    id: 2,
    title: "Book Two",
    price: 12.99,
  },
  {
    id: 3,
    title: "Book Three",
    price: 15.99,
  },
  {
    id: 4,
    title: "Book Four",
    price: 9.99,
  },
];
const PricetoPay = ShoppingCart.reduce((acc,item) => acc+ item.price,0);
console.log(`Total Price to Pay is $${PricetoPay.toFixed(2)}`);
```

---

## If you love Rajan then read all this documentary and Getting Started

1. Clone this repository
2. Open `index.html` in your browser or run the JavaScript file in Node.js
3. Open browser console to see the outputs
4. Experiment with the code examples

## Contributing

Feel free to contribute by adding more JavaScript concepts and examples!

## License

This project is open source and available under the [MIT License](LICENSE).
