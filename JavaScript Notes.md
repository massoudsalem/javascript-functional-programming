### var vs let vs const

- var is function scoped, let and const are block scoped
- var can be redeclared, let and const cannot
- var and let can be reassigned, const cannot
- if var is declared in global scope, it becomes a property of the global object (window in browser, global in Node.js), let and const do not
- const must be initialized when declared, var and let can be initialized later
- var hoists to the top of the function and is initialized as undefined, let and const are not initialized resulting in a ReferenceError (temporal dead zone)

### Difference between static typing, dynamic typing, strong typing, and weak typing

- Static typed languages require variables to be declared with a type, dynamic typed languages do not
- Strongly typed languages require variables to be used with the correct type, weakly typed languages do not (implicit type coercion)
- Boolean coercion: 0, -0, null, false, NaN, undefined, or the empty string (“”) are coerced to false, everything else is coerced to true
- JavaScript is dynamic and weakly typed

### What is the difference between == and === in JavaScript?

- == is the abstract equality operator, === is the strict equality operator
- == will perform type coercion, === will not (will return false if types are different)

### NaN in JavaScript

- NaN is a property of the global object
- NaN is a value representing Not-A-Number
- NaN is the result of an operation that cannot produce a normal result
- NaN is not equal to anything, including itself (according to IEEE 754) so use Number.isNaN() to check if a value is NaN
  - isNaN("Hello") // Returns true
  - isNaN(345) // Returns false
  - isNaN('1') // Returns false, since '1' is converted to Number type which results in 0 ( a number)
  - isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
  - isNaN(false) // Returns false, since false converted to Number type results in 0 (a number)
  - isNaN(undefined) // Returns true
- To check if NaN is itself, use Object.is(NaN, NaN) which returns true

### Strict mode vs sloppy mode

- Strict mode is a way to introduce better error-checking into your code
- Strict mode makes it easier to write "secure" JavaScript
- Strict mode changes previously accepted "bad syntax" into real errors
- As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable
- Strict mode makes it easier to write "secure" JavaScript
- Strict mode eliminates some JavaScript silent errors by changing them to throw errors
- Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode (as TCO and Trampolines are possible in strict mode)
- Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript
- It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object)
- Strict mode makes it easier to write "secure" JavaScript
- Duplicate arguments are not allowed by developers.
- In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name.
- The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers.
  -Engineers will not be allowed to create global variables in 'Strict Mode

### How to know which object 'this' refers to

- function called by new keyword: this refers to the newly created object
- function called by call(), apply(), or bind(): this refers to the object specified as the first parameter
- function called as a method: this refers to the object that the function is a property of
- function called as a DOM event handler: this refers to the element that fired the event
- function called as a normal function: this refers to the global object (window in browser, global in Node.js) but in strict mode this is undefined

### What is the difference between call, apply, and bind?

- call and apply are used to invoke a function immediately
- bind is used to create a new function that can be invoked later
- call and apply are similar, except that call takes in a list of arguments, while apply takes in a single array of arguments

### What is closure?

- A closure is a backpack that a function carries around wherever it goes (a function that remembers the environment in which it was created)
- A closure is a function that has access to its outer function scope even after the outer function has returned
- carrying is an application of closure (a function that returns a function that remembers the environment in which it was created and can be invoked later)

### what is the difference between normal function and arrow function?

- Arrow functions do not have their own this, arguments, super, or new.target
- Arrow functions are always anonymous
- Arrow functions cannot be used as constructors and will throw an error when used with new
- Arrow functions do not have a prototype property
- Arrow functions cannot be used as generators
- Arrow functions do not have a [Construct] method and cannot be used with new
- Arrow functions do not have a [Call] method and cannot be used with call(), apply(), or bind()

### What is the difference between function declaration and function expression?

- Function declarations are hoisted, function expressions are not
- Function declarations are loaded before any code is executed, function expressions are loaded only when the interpreter reaches that line of code
- Function declarations can be called before they are declared, function expressions cannot
- Function declarations can be used to create self-referencing functions, function expressions cannot

### What is the difference between rest and spread operators?

- Rest parameters are used to represent an indefinite number of arguments as an array ( variadic function e.g. function(...args) ) note: rest parameters must be the last parameter in a function. [gathering]
- Spread operators are used to split up an array into individual elements ( e.g. Math.max(...[1, 2, 3]) ) or to spread an array into another array ( e.g. [...[1, 2, 3], ...[4, 5, 6]] ) or to spread an object into another object ( e.g. {...{a: 1, b: 2}, ...{c: 3, d: 4}} ) [spreading]

### Promises

- A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 4 possible states: fulfilled, rejected, pending, and settled.
- A promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value and can be chained with .then() and .catch() methods to handle the eventual result or failure of the asynchronous operation (e.g. a network request)
- callback hell is a problem with multiple nested callbacks, promises solve this problem by chaining .then() and .catch() methods

### What is the difference between synchronous and asynchronous code?

- Synchronous code is executed in sequence, each statement waits for the previous statement to finish before executing
- Asynchronous code doesn’t have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user (e.g. setTimeout(), setInterval(), XMLHttpRequest(), fetch(), Promises, async/await)
- JavaScript has a concurrency model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks re visit this [event-loop visualization](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif) and [this too](https://youtu.be/3Jma9VYvSz8)

### What are Classes in JavaScript?

- JavaScript classes, introduced in ECMAScript 2015 as a syntactical sugar but class is actually more than just a syntactical sugar first it make a function, add a prototype property to the function then add a constructor property to the prototype property then it add all the methods to the prototype property lastly it return the function also, in class you can make private and public methods and properties by using # sign before the name of the method or property in class, you can make static methods and properties by using static keyword before the name of the method or property also can inherit properties and methods from other classes by using the extend keyword
- unlike function declaration class is not hoisted

### What are generators in JavaScript?

- Generators are functions that can be paused and resumed, yielding multiple values (one at a time) in a sequential manner
- Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances (e.g. function\* generator() { yield 1; yield 2; yield 3; } const gen = generator(); console.log(gen.next().value); // 1 console.log(gen.next().value); // 2 console.log(gen.next().value); // 3)

### async/await
- async/await is syntactic sugar for promises
- async/await makes asynchronous code look and behave a little more like synchronous code
- async/await is built on top of promises
- async/await is non blocking
- async/await is a function that returns a promise
- you can mimic the async/await behavior by using generators revisit [Will Sentance's workshop](https://frontendmasters.com/courses/javascript-new-hard-parts/)

### What is the difference between async/await and generators?
- Generator functions are run by their generator yield by yield but async functions are run by the event loop
- async/await provides a certain use case for generators, but generators can do much more than async/await
- return value of async function is always a promise but return value of generator function is always an iterator

### Set vs WeakSet

- Set is a collection of unique values, WeakSet is a collection of objects only
- Set contents are held strongly, WeakSet contents are held weakly (if there are no other references to an object stored in the WeakSet, they can be garbage collected)
- WeakSet does not support iteration or provide methods to check its size or manipulate its elements unlike Set
- WeakSet is used in scenarios where you need to store a collection of objects and associate some data with them, but where those objects may disappear at some point in the future and you want to avoid memory leaks
  - Note: Map and WeakMap are the same as Set and WeakSet except they are key-value pairs instead of just values

