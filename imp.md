# JavaScript Core Concepts

A comprehensive demonstration of fundamental JavaScript concepts including Promises, async/await, fetch API, classes, and the bind method.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Code Examples](#code-examples)
  - [Promises](#promises)
  - [Async/Await](#asyncawait)
  - [Fetch API](#fetch-api)
  - [Classes](#classes)
  - [Bind Method](#bind-method)
- [Getting Started](#getting-started)
- [Key Concepts Explained](#key-concepts-explained)
- [Performance Notes](#performance-notes)

## Overview

This repository contains practical examples demonstrating essential JavaScript concepts that every developer should understand. The code showcases modern JavaScript features and best practices for handling asynchronous operations and object-oriented programming.

## Features

- ✅ Promise creation and handling
- ✅ Error handling with try/catch and .catch()
- ✅ Async/await syntax
- ✅ HTTP requests using Fetch API
- ✅ ES6 Classes with constructor and methods
- ✅ Context binding with .bind() method
- ✅ Chaining promises with .then()
- ✅ Finally blocks for cleanup operations

## Code Examples

### Promises

The codebase demonstrates two different promise implementations:

#### Basic Promise (Commented)
```javascript
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){resolve('Promise One Resolved')}, 3000)
})

promiseOne.then(function(){
    console.log('Promise One Then Called')
})
```

#### Advanced Promise with Error Handling (Commented)
```javascript
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false; // change to true to simulate error
        if(!error){
            resolve({username:"rajan", password:"1234"});
        } else {
            reject('Promise Three Rejected');
        }
    }, 3000);
});

promiseThree
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((err) => {
    console.log("Error:", err);
})
.finally(() => {
    console.log("Promise is either resolved or rejected");
});
```

### Async/Await

Modern alternative to promise chaining using async/await syntax:

```javascript
async function consumepromiseThree() {
    try {
        const user = await promiseThree;
        console.log(user);
        const username = await user.username;
        console.log(username);
    } catch (err) {
        console.log("Error:", err);
    } finally {
        console.log("Promise is either resolved or rejected");
    }
}
```

### Fetch API

Demonstrates HTTP requests using the modern Fetch API:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("Error:", err);
})
.finally(()=>{
    console.log("Fetch operation completed");
});
```

### Classes

ES6 class implementation with constructor and methods:

```javascript
class Rajan{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    getDetails(){
        return `My name is ${this.name} and my age is ${this.age}`;
    }
}

let a = new Rajan('Rajan', 20);
console.log(a.getDetails()); // Output: "My name is Rajan and my age is 20"
```

### Bind Method

Example of context binding for event handlers (commented implementation):

```javascript
class Person{
    constructor(name, age){
        this.library = "ReactJS";
        this.server = "http://localhost:3000";
    }

    // bind(this) is used to bind the this keyword to the class instance
    handleClick(){
        console.log(this.library);
        console.log(this.server);
    }
}

// Usage with event listener
// document.querySelector('#btn').addEventListener('click', this.handleClick.bind(this));
```

## Getting Started

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd javascript-concepts
   ```

2. Open the JavaScript file in your preferred code editor

3. Uncomment the sections you want to test

4. Run the code in:
   - Browser console (F12 → Console)
   - Node.js environment: `node filename.js`
   - Online JavaScript playground

## Key Concepts Explained

### Promises
- **Purpose**: Handle asynchronous operations
- **States**: Pending, Resolved (fulfilled), Rejected
- **Methods**: `.then()`, `.catch()`, `.finally()`

### Async/Await
- **Purpose**: Write asynchronous code that looks synchronous
- **Benefits**: Better readability, easier error handling
- **Requirements**: Must be used inside `async` functions

### Fetch API
- **Purpose**: Modern way to make HTTP requests
- **Returns**: Promise that resolves to Response object
- **Advantages**: More powerful and flexible than XMLHttpRequest

### Classes
- **Purpose**: Object-oriented programming in JavaScript
- **Features**: Constructor, methods, inheritance support
- **Syntax**: ES6+ standard

### Bind Method
- **Purpose**: Explicitly set the `this` context
- **Use Cases**: Event handlers, callback functions
- **Alternative**: Arrow functions (lexical binding)

## Performance Notes

The code includes an important observation about execution timing:

> **Fetch operations typically resolve faster than custom promises with setTimeout because:**
> - Fetch depends on network response time
> - Custom promises with setTimeout have a fixed delay (3000ms in this example)
> - Async/await has similar timing to .then()/.catch() but with different syntax

## Contributing

Feel free to contribute by:
- Adding more examples
- Improving documentation
- Fixing bugs or issues
- Suggesting new JavaScript concepts to demonstrate

## License

This project is open source and available under the [MIT License](LICENSE).

---

*This repository serves as a learning resource for JavaScript developers at all levels.*
