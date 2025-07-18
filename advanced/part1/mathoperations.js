// math operations in JavaScript
// we will discuss about advanced JavaScript concepts   
function add(a, b) {
  return a + b; // returns the sum of a and b
}   
function subtract(a, b) {
    return a - b; // returns the difference of a and b
    }   
function multiply(a, b) {
    return a * b; // returns the product of a and b
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero"); // throws an error if b is zero
    }
    return a / b; // returns the quotient of a and b
}



import { add, subtract, multiply, divide } from './mathoperations.js'; // Importing math operations

// Example usage of math operations
console.log("Addition:", add(5, 3)); // Output: Addition: 8
console.log("Subtraction:", subtract(5, 3)); // Output: Subtraction: 2
console.log("Multiplication:", multiply(5, 3)); // Output: Multiplication: 15
console.log("Division:", divide(5, 3)); // Output: Division: 1.6666666666666667
// Example usage of error handling in division
try {
    console.log("Division by zero:", divide(5, 0)); // This will throw an error
} catch (error) {
    console.error("Error:", error.message); // Output: Error: Cannot divide by zero
}
// This code demonstrates basic math operations in JavaScript
// It includes functions for addition, subtraction, multiplication, and division
// It also includes error handling for division by zero
// The functions are imported from a separate module for better organization
// This modular approach allows for better code maintainability and reusability 




module.exports = { add, subtract, multiply, divide }; // Exporting math operations for use in other modules
// This allows other files to import and use these functions
// The code is structured to be modular and reusable, following best practices in JavaScript development
// By using modules, we can keep our code organized and maintainable



