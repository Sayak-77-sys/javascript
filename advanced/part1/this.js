//this keyword and binding in JavaScript
//the `this` keyword refers to the context in which a function is called
//it can refer to different objects depending on how the function is invoked
function showThis() {
  console.log(this);
}
// in a regular function call, `this` refers to the global object (or undefined in strict mode)
showThis(); // in non-strict mode, logs the global object (window in browsers)
// in strict mode, `this` is undefined
"use strict";
function showThisStrict() {
  console.log(this);
}
showThisStrict(); // undefined          
//binding context with call, apply, and bind

function greet() {
  console.log(`Hello, ${this.name}`);
}
const user = { name: "Alice" };
greet.call(user); // Hello, Alice
greet.apply(user); // Hello, Alice
const greetAlice = greet.bind(user);
greetAlice(); // Hello, Alice       

