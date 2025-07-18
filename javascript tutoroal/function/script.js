// we will learn about function in this file

// function is a block of code that can be used to perform a task

// function declaration
/*
function sayHello() {
    console.log("Hello");
}

// function expression
const sayHello = function() {
    console.log("Hello");
}

//fat arrow function
const sayHello = () => {
    console.log("Hello");
}

// function call
sayHello();

// function parameter

// now let's compare these 3 types of function expressions with examples

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// 2. Function Expression
const greet2 = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet2("Bob")); // "Hello, Bob!"

// 3. Arrow Function
const greet3 = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet3("Charlie")); // "Hello, Charlie!"

// Key differences:

// Hoisting: Function declarations are hoisted
console.log(hoistedFunc()); // "This works!"
function hoistedFunc() {
    return "This works!";
}

// Function expressions are NOT hoisted
// console.log(notHoisted()); // Error: notHoisted is not a function
const notHoisted = function() {
    return "This won't work if called before declaration";
};

// Arrow functions are NOT hoisted
// console.log(arrowNotHoisted()); // Error: arrowNotHoisted is not a function
const arrowNotHoisted = () => {
    return "This won't work if called before declaration";
};

// 'this' binding differences
const person = {
    name: "John",
    // Function declaration
    greet1: function() {
        console.log(`Hello, I'm ${this.name}`);
    },
    // Arrow function
    greet2: () => {
        console.log(`Hello, I'm ${this.name}`); // 'this' refers to global scope
    }
};

person.greet1(); // "Hello, I'm John"
person.greet2(); // "Hello, I'm undefined"

// Shorter arrow function syntax
const add = (a, b) => a + b; // implicit return
console.log(add(5, 3)); // 8

const square = x => x * x; // single parameter doesn't need parentheses
console.log(square(4)); // 16


//parameter and arguments

// Parameters vs Arguments

// Parameters are the variables listed in the function definition
function greet(name, age) {  // 'name' and 'age' are parameters
    console.log(`Hello ${name}, you are ${age} years old`);
}

// Arguments are the actual values passed to the function when it's called
greet("Alice", 25);  // "Alice" and 25 are arguments

// More examples:

// Function with multiple parameters
function calculateArea(length, width) {  // parameters
    return length * width;
}

// Calling with arguments
console.log(calculateArea(10, 5));  // 10 and 5 are arguments

// Arrow function example
const multiply = (x, y) => x * y;  // x and y are parameters
console.log(multiply(3, 4));  // 3 and 4 are arguments

// Default parameters
function createUser(name, age = 18) {  // age has default value
    console.log(`User: ${name}, Age: ${age}`);
}

createUser("Bob");  // age argument not provided, uses default
createUser("Charlie", 30);  // age argument provided

// Rest parameters
function sum(...numbers) {  // rest parameter collects all arguments
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // arguments: 1, 2, 3, 4, 5

// Arguments object (available in regular functions)
function showArguments() {
    console.log("Number of arguments:", arguments.length);
    console.log("Arguments:", arguments);
}

showArguments("a", "b", "c");  // arguments: "a", "b", "c"

// Note: Arrow functions don't have their own arguments object
const arrowFunc = () => {
    // console.log(arguments); // This would cause an error
    console.log("Arrow functions don't have arguments object");
};

arrowFunc();
*/
 //rest operator

// Rest operator (...) allows you to collect multiple elements into an array
// It's used in function parameters and array destructuring

// 1. Rest operator in function parameters
function sum(...numbers) {
    console.log("Numbers received:", numbers); // [1, 2, 3, 4, 5]
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5)); // Sum: 15

// 2. Rest operator with other parameters
function createProfile(name, age, ...hobbies) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
}

createProfile("Alice", 25, "reading", "swimming", "coding");
// Name: Alice
// Age: 25
// Hobbies: reading, swimming, coding

// 3. Rest operator in array destructuring
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
const [first, second, ...remaining] = fruits;

console.log("First:", first); // First: apple
console.log("Second:", second); // Second: banana
console.log("Remaining:", remaining); // Remaining: ["orange", "grape", "kiwi"]

// 4. Rest operator to combine arrays
const colors1 = ["red", "blue"];
const colors2 = ["green", "yellow"];
const allColors = [...colors1, ...colors2];

console.log("All colors:", allColors); // All colors: ["red", "blue", "green", "yellow"]

// 5. Rest operator with objects
const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
};

const {name, ...otherDetails} = person;
console.log("Name:", name); // Name: John
console.log("Other details:", otherDetails); // Other details: {age: 30, city: "New York", country: "USA"}

// 6. Rest operator in arrow functions
const multiply = (...nums) => {
    return nums.reduce((product, num) => product * num, 1);
};

console.log("Product:", multiply(2, 3, 4)); // Product: 24

// 7. Rest operator with spread operator
function processItems(first, ...rest) {
    console.log("First item:", first);
    console.log("Rest items:", rest);
    
    // Spread the rest items back
    const allItems = [first, ...rest];
    console.log("All items combined:", allItems);
}

processItems("item1", "item2", "item3", "item4");
// First item: item1
// Rest items: ["item2", "item3", "item4"]
// All items combined: ["item1", "item2", "item3", "item4"]


//first class function

// First Class Functions in JavaScript
// A first-class function is a function that can be:
// 1. Assigned to a variable
// 2. Passed as an argument to another function
// 3. Returned from another function
// 4. Stored in data structures

console.log("=== First Class Functions Examples ===");

// 1. Assigning function to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log("1. Function assigned to variable:", greet("Alice"));

// 2. Passing function as an argument (Higher-Order Function)
function processUser(name, callback) {
    const processedName = name.toUpperCase();
    return callback(processedName);
}

const welcomeMessage = function(name) {
    return `Welcome, ${name}!`;
};

const result = processUser("bob", welcomeMessage);
console.log("2. Function passed as argument:", result);

// 3. Returning function from another function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("3. Function returned from function:");
console.log("Double of 5:", double(5)); // 10
console.log("Triple of 5:", triple(5)); // 15

// 4. Storing functions in data structures
const mathOperations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

console.log("4. Functions stored in object:");
console.log("Add:", mathOperations.add(10, 5)); // 15
console.log("Multiply:", mathOperations.multiply(4, 3)); // 12

// 5. Functions in arrays
const operations = [
    (x) => x * 2,
    (x) => x + 10,
    (x) => x ** 2
];

let value = 5;
operations.forEach((operation, index) => {
    value = operation(value);
    console.log(`Step ${index + 1}: ${value}`);
});

// 6. Function composition
const compose = (...functions) => {
    return (value) => {
        return functions.reduceRight((result, func) => func(result), value);
    };
};

const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;
const square = (x) => x ** 2;

const composedFunction = compose(square, multiplyByTwo, addOne);
console.log("6. Function composition result:", composedFunction(3)); // ((3 + 1) * 2)² = 64

// 7. Callback functions with setTimeout
console.log("7. Function as callback (check console after 1 second):");
setTimeout(() => {
    console.log("This message appears after 1 second!");
}, 1000);

// 8. Event handlers (simulated)
const button = {
    addEventListener: function(event, handler) {
        console.log(`Event '${event}' handler added`);
        // Simulate event trigger
        if (event === 'click') {
            handler('Button clicked!');
        }
    }
};

const handleClick = function(message) {
    console.log("8. Event handler function:", message);
};

button.addEventListener('click', handleClick);





//higher order function


// Example: Higher Order Function

// A higher order function is a function that takes another function as an argument or returns a function.

// This function takes a function (fn) and a value, and applies fn to the value twice.
function applyTwice(fn, value) {
    return fn(fn(value));
}

// Simple function to increment a number
function increment(x) {
    return x + 1;
}

console.log("9. Higher order function example:");
console.log("applyTwice(increment, 5):", applyTwice(increment, 5)); // (5 + 1) + 1 = 7

// Higher order function returning a function
function makeMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}

const fivemul = makeMultiplier(5);
const sixmul = makeMultiplier(6);

console.log("fivemul(4):", fivemul(4)); // 20
console.log("sixmul(4):", sixmul(4)); // 24







//pure and impure function

// Pure Function Example
// A pure function always produces the same output for the same input and has no side effects.
function pureAdd(a, b) {
    return a + b;
}

console.log("10. Pure function example:");
console.log("pureAdd(2, 3):", pureAdd(2, 3)); // 5
console.log("pureAdd(2, 3):", pureAdd(2, 3)); // 5 (always the same result)

// Impure Function Example
// An impure function may produce different outputs for the same input or cause side effects.
let counter = 0;
function impureIncrement(x) {
    counter++; // side effect: modifies external variable
    return x + counter;
}

console.log("11. Impure function example:");
console.log("impureIncrement(2):", impureIncrement(2)); // 2 + 1 = 3
console.log("impureIncrement(2):", impureIncrement(2)); // 2 + 2 = 4 (different result, counter changed)

// Another impure function: modifies input object
function impurePush(arr, value) {
    arr.push(value); // side effect: mutates input array
    return arr;
}

let myArray = [1, 2];
console.log("impurePush(myArray, 3):", impurePush(myArray, 3)); // [1,2,3]
console.log("myArray after impurePush:", myArray); // [1,2,3] (original array changed)


//closure and scope
// Closure and Scope Example

// Scope: Variables are only accessible within the region (scope) they are defined.
// Example of function scope:
function scopeExample() {
    let message = "Hello from scope!";
    console.log(message); // Accessible here
}
scopeExample();
// console.log(message); // Uncaught ReferenceError: message is not defined (not accessible here)

// Closure: A closure is a function that "remembers" the variables from its outer (enclosing) scope even after that scope has finished executing.
function makeCounter() {
    let count = 0; // 'count' is in the outer scope of the inner function
    return function() {
        count++;
        return count;
    };
}

const counter1 = makeCounter();
console.log("counter1():", counter1()); // 1
console.log("counter1():", counter1()); // 2

const counter2 = makeCounter();
console.log("counter2():", counter2()); // 1 (separate closure, separate count)

// Closures are useful for data privacy and maintaining state between function calls.
function secretHolder(secret) {
    return {
        getSecret: function() {
            return secret;
        },
        setSecret: function(newSecret) {
            secret = newSecret;
        }
    };
}

const mySecret = secretHolder("shh!");
console.log("mySecret.getSecret():", mySecret.getSecret()); // "shh!"
mySecret.setSecret("new secret");
console.log("mySecret.getSecret():", mySecret.getSecret()); // "new secret"



//immedate invoked function expression

// IIFE (Immediately Invoked Function Expression) Example

// An IIFE is a function that is executed immediately after it is defined.
(function() {
    console.log("This is an IIFE!");
})();

// IIFE with parameters


//hoisting differences b/w function declaration and function expression

// Function Declaration:
// 1. Hoisted to the top of the scope
// 2. Can be called before declaration
// 3. Example:
function hoistExample() {
    console.log("This is a function declaration!");
}
// Function Expression:
// 1. Not hoisted
// 2. Cannot be called before declaration
// 3. Example:
const hoistExample2 = function() {
    console.log("This is a function expression!");
};

// Example of hoisting:
console.log("Before declaration:", hoistExample()); // This is a function declaration!

