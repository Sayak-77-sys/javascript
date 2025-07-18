//closures in JavaScript
//closures are a powerful feature in JavaScript that allow functions to have access to variables from their outer scope
//even after the outer function has finished executing  

function createCounter() {
  let count = 0; // private variable

  return function() {
    count += 1; // increment the count
    return count; // return the current count
  };
}
// this inner function forms a closure, capturing the `count` variable
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// closures are often used to create private variables and methods
// they can also be used to maintain state in asynchronous operations
// for example, in event handlers or callbacks

// closures can also be used to create functions with preset parameters
function multiplyBy(factor) {
  return function(number) {
    return number * factor; // closure captures the `factor` variable
  };
}
const double = multiplyBy(2);

console.log(double(5)); // 10
console.log(double(10)); // 20  

// closures are a fundamental concept in JavaScript
// they enable powerful patterns like currying, partial application, and function factories
// understanding closures is essential for mastering JavaScript and writing efficient code

// we will explore closures in more detail in the next sections
// including practical examples and use cases
// we will also discuss how closures interact with the event loop and asynchronous programming
