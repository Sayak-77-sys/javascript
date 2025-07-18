//array declaration

console.log("=== JavaScript Arrays: From Scratch to Advanced ===\n");

// 1. BASIC ARRAY DECLARATION AND CREATION
console.log("1. BASIC ARRAY DECLARATION AND CREATION");

// Method 1: Array literal syntax
const fruits = ["apple", "banana", "orange"];
console.log("Array literal:", fruits);

// Method 2: Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log("Array constructor:", numbers);

// Method 3: Array with single number (creates empty array with that length)
const emptyArray = new Array(3);
console.log("Array with length 3:", emptyArray, "Length:", emptyArray.length);

// Method 4: Array.from() - creates array from array-like objects
const arrayFromString = Array.from("hello");
console.log("Array from string:", arrayFromString);

// Method 5: Spread operator
const originalArray = [1, 2, 3];
const spreadArray = [...originalArray, 4, 5];
console.log("Spread array:", spreadArray);

console.log("\n" + "=".repeat(50) + "\n");

// 2. ACCESSING AND MODIFYING ARRAYS
console.log("2. ACCESSING AND MODIFYING ARRAYS");

const colors = ["red", "green", "blue", "yellow", "purple"];

// Accessing elements
console.log("First element:", colors[0]);
console.log("Last element:", colors[colors.length - 1]);
console.log("Array length:", colors.length);

// Modifying elements
colors[1] = "emerald";
console.log("After modification:", colors);

// Adding elements
colors.push("pink"); // Add to end
colors.unshift("black"); // Add to beginning
console.log("After adding elements:", colors);

// Removing elements
const lastColor = colors.pop(); // Remove from end
const firstColor = colors.shift(); // Remove from beginning
console.log("Removed colors:", { lastColor, firstColor });
console.log("After removing elements:", colors);

console.log("\n" + "=".repeat(50) + "\n");

// 3. ARRAY METHODS - BASIC
console.log("3. ARRAY METHODS - BASIC");

const numbers2 = [1, 2, 3, 4, 5];

// slice() - extracts portion of array (non-destructive)
const sliced = numbers2.slice(1, 3);
console.log("Original:", numbers2);
console.log("Sliced (1,3):", sliced);

// splice() - modifies array by adding/removing elements
const numbers3 = [1, 2, 3, 4, 5];
const spliced = numbers3.splice(1, 2, "a", "b");
console.log("Original:", numbers3);
console.log("Spliced elements:", spliced);

// indexOf() and includes()
const fruits2 = ["apple", "banana", "orange"];
console.log("Index of 'banana':", fruits2.indexOf("banana"));
console.log("Includes 'grape':", fruits2.includes("grape"));

console.log("\n" + "=".repeat(50) + "\n");

// 4. ARRAY ITERATION METHODS
console.log("4. ARRAY ITERATION METHODS");

const numbers4 = [1, 2, 3, 4, 5];

// forEach() - executes function for each element
console.log("forEach():");
numbers4.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map() - creates new array with transformed elements
const doubled = numbers4.map(num => num * 2);
console.log("Original:", numbers4);
console.log("Doubled:", doubled);

// filter() - creates new array with elements that pass test
const evenNumbers = numbers4.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// reduce() - reduces array to single value
const sum = numbers4.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// find() and findIndex()
const firstEven = numbers4.find(num => num % 2 === 0);
const firstEvenIndex = numbers4.findIndex(num => num % 2 === 0);
console.log("First even number:", firstEven, "at index:", firstEvenIndex);

console.log("\n" + "=".repeat(50) + "\n");

// 5. ARRAY SORTING AND REVERSING
console.log("5. ARRAY SORTING AND REVERSING");

const names = ["Charlie", "Alice", "Bob", "David"];
const numbers5 = [3, 1, 4, 1, 5, 9, 2, 6];

// sort() - sorts array in place
names.sort();
console.log("Sorted names:", names);

// sort() with custom comparator
numbers5.sort((a, b) => a - b); // Numeric sort
console.log("Sorted numbers:", numbers5);

// reverse() - reverses array in place
const reversed = [...names].reverse();
console.log("Reversed names:", reversed);

console.log("\n" + "=".repeat(50) + "\n");

// 6. MULTIDIMENSIONAL ARRAYS
console.log("6. MULTIDIMENSIONAL ARRAYS");

// 2D Array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("2D Matrix:");
matrix.forEach(row => console.log(row));

// Accessing elements
console.log("Element at [1][1]:", matrix[1][1]);

// Flattening arrays
const flattened = matrix.flat();
console.log("Flattened matrix:", flattened);

// 3D Array
const cube = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
console.log("3D Cube flattened:", cube.flat(2));

console.log("\n" + "=".repeat(50) + "\n");

// 7. ARRAY DESTRUCTURING
console.log("7. ARRAY DESTRUCTURING");

const coordinates = [10, 20, 30];

// Basic destructuring
const [x, y, z] = coordinates;
console.log("Destructured:", { x, y, z });

// Skipping elements
const [first, , third] = coordinates;
console.log("First and third:", { first, third });

// Rest operator
const [head, ...tail] = coordinates;
console.log("Head and tail:", { head, tail });

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log("Swapped:", { a, b });

console.log("\n" + "=".repeat(50) + "\n");

// 8. ADVANCED ARRAY METHODS
console.log("8. ADVANCED ARRAY METHODS");

const data = [
    { name: "Alice", age: 25, city: "NYC" },
    { name: "Bob", age: 30, city: "LA" },
    { name: "Charlie", age: 35, city: "NYC" },
    { name: "David", age: 28, city: "Chicago" }
];

// some() - tests if at least one element passes test
const hasNYC = data.some(person => person.city === "NYC");
console.log("Has NYC resident:", hasNYC);

// every() - tests if all elements pass test
const allAdults = data.every(person => person.age >= 18);
console.log("All adults:", allAdults);

// flatMap() - maps then flattens
const cities = data.flatMap(person => person.city.split(""));
console.log("All city letters:", cities);

// Array.from() with mapping function
const ages = Array.from(data, person => person.age);
console.log("All ages:", ages);

console.log("\n" + "=".repeat(50) + "\n");

// 9. ARRAY PERFORMANCE AND OPTIMIZATION
console.log("9. ARRAY PERFORMANCE AND OPTIMIZATION");

// Pre-allocating arrays
const size = 1000000;
const preAllocated = new Array(size);
console.log("Pre-allocated array size:", preAllocated.length);

// Typed Arrays (for performance)
const intArray = new Int32Array([1, 2, 3, 4, 5]);
console.log("Typed array:", intArray);

// Set for unique values
const uniqueNumbers = [...new Set([1, 2, 2, 3, 3, 4])];
console.log("Unique numbers:", uniqueNumbers);

console.log("\n" + "=".repeat(50) + "\n");

// 10. ARRAY UTILITY FUNCTIONS
console.log("10. ARRAY UTILITY FUNCTIONS");

// Chunking array
function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}



