// because the issue of block scope or functional scope we prefer not to use var

let score = "222212";

let numberInvalue = Number(score);
console.log(numberInvalue + 1);
console.log(typeof numberInvalue);

// stack (primitive here we get copy) and heap (non-primitive, here we get reference)

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

const str = "Hello, World!";
console.log(str.length);
console.log(str);

const gameName = new String("Rajjju"); // Use built-in String constructor
console.log(gameName);

console.log(gameName.charAt(3));

console.log(gameName.indexOf('j'));

const url = "https://www.barkapps.vercel.app";
console.log(url);
console.log(url.replace("https://", "http://"));

const otherNumber = 123.52323;

console.log(otherNumber.toPrecision(3));

const price = 1202212;

console.log(price.toLocaleString("en-IN")); // Indian Number System

const max = 20;
const min = 10;

console.log(Math.ceil(Math.random()* (max-min-1))+min)

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate);
console.log(newDate.getFullYear);
console.log(newDate.getTime);
console.log(newDate.getHours);
console.log(newDate.getMinutes);
console.log(newDate.getSeconds);
console.log(newDate.toLocaleDateString());
console.log(newDate.getMonth);

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

//object
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

const tinderuser = {};

tinderuser.id = "123abc";
tinderuser.name = "John Babua";
tinderuser.age = 28;
tinderuser.location = "Patna";

console.log(tinderuser);

// using nested objects

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

// optional chaining
console.log(laddu?.details?.type?.base);

const database = [
    {
        user1:{
            id: "123abc",
            name: "John Babua",
            age: 28,
            location: "Patna"
        }
    },
    {
        user2:{
            id: "456def",
            name: "Subodh Kumar",
            age: 25,
            location: "Delhi"
        }
    },
    {
        user3:{
            id: "789ghi",
            name: "Kunal Kumar",
            age: 30,
            location: "Mumbai"
        }
    }

]

console.log(database[1].user2.name);

console.log(Object.keys(database[0].user1));
console.log(Object.hasOwnProperty(database[0].user1));

const raju = function() {
    console.log("Hello, I am Raju");
}
raju();

function add(a,b){ // here we give the parameters
    return a+b;
}

console.log(add(2,3)); // here we give the arguments

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

function handleobject(anyobject){ // Pass the whole object
    console.table(anyobject);
    console.log(`My Name is ${anyobject.name} and I am ${anyobject.age} years old my occupation is ${anyobject.occupation}.`);
}
handleobject(anyobject);

// Scope Understanding
let a = 300;

if(true){
    let b = 400;
    let a = 100;
    console.log(a + b);
}

console.log(a);

// Closure (Child function use properties of parent function)

function one(){
    const username = "Babua";

    function two(){
        const userage = 25;
        console.log("Username: " + username + ", Age: " + userage);
    }

    two();
}

one();

// Arrow Function

// Why we use arrow functions?
// In normal functions, "this" depends on how the function is called 
// (and often ends up pointing to the global/window object in callbacks).
// Arrow functions fix this issue because they don't have their own "this"; 
// instead, they inherit "this" from the surrounding scope (lexical scoping).
// Arrow functions also have a more concise syntax, especially for simple one-liner functions.

// Normal function
function NormalFunc() {
  this.value = 100;
  setTimeout(function() {
    console.log(this.value); // ❌ undefined (points to window/global)
  }, 1000);
}

// Arrow function
function ArrowFunc() {
  this.value = 100;
  setTimeout(() => {
    console.log(this.value); // ✅ 100 (inherits "this" from ArrowFunc)
  }, 1000);
}

new NormalFunc();
new ArrowFunc();

// we don't use return keyword if we not use curly braces
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(5, 10));
 
// Immediately Invoked Function Expression (IIFE) 
// agar hum function body ko 
// hi parenthesis mein wrap karte hain toh return keyword ki zarurat nahi hoti, function call ki

(function rajan() {
  console.log("This is an IIFE");
})();

(
  () => {
    console.log("This is an LIFE");
  }
)();

// Control flow statements

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

const obj ={}

if(Object.keys(obj).length === 0){
  console.log("Object is empty");
}

// terniary operator

// condition ? true : false
const age=18;

age>=18?console.log("You are eligible to vote"):console.log("You are not eligible to vote");

// Looping 

// For In loop
const arr = [1,2,3,4,5];
const greetings = "Welcome to World of Rajan Singh";

for (const i in arr) {
  console.log(i); 
  console.log(arr[i]); 
}

for (const greets in greetings) {
  console.log(` Each char of greetings is at ${greets}`);
}

// Maps

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

const programmingLanguages = ["JavaScript", "Python", "Flutter", "Dart", "C++"];

for (const lang in programmingLanguages) { // If  I use in then it gives index
  console.log(`I love ${lang}`);
}
for (const lang of programmingLanguages) { // If I use of then it gives value
  console.log(`I love ${lang}`);
}

// pass function in loop

programmingLanguages.forEach(function (val) {
  console.log(`I love ${val}`);
});

// Using arrow function
programmingLanguages.forEach( (val) => console.log(`I love ${val}`));

// Object inside array

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

// filter method

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

// map method

const MyNums = [1,2,3,4,5];
const newNums = MyNums.map((num)=> {
  return num*2;
})

console.log(newNums);

// reduce method

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
