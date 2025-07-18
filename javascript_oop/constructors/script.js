// constructor function

// A constructor function in JavaScript is used to create multiple objects with the same structure and methods.
// By convention, constructor function names start with a capital letter.

function Person(name, age) {
    // 'this' refers to the new object being created
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
}

// To create a new object using the constructor, use the 'new' keyword:
let alice = new Person("Alice", 25);
let bob = new Person("Bob", 30);

// Each object has its own properties and methods
alice.greet(); // Output: Hello, my name is Alice and I am 25 years old.
bob.greet();   // Output: Hello, my name is Bob and I am 30 years old.

// You can check the constructor of an object:
console.log(alice.constructor === Person); // true

// Properties and methods can also be added to the prototype to share them among all instances:
Person.prototype.sayBye = function() {
    console.log(this.name + " says goodbye!");
};

alice.sayBye(); // Output: Alice says goodbye!
bob.sayBye();   // Output: Bob says goodbye!


// Example of calling the constructor without 'new' and handling the error

function Car(model) {
    if (!(this instanceof Car)) {
        throw new Error("Car constructor must be called with 'new'");
    }
    this.model = model;
}

// Correct usage:
let myCar = new Car("Toyota");
console.log(myCar.model); // Output: Toyota

// Incorrect usage (without 'new'):
try {
    let brokenCar = Car("Honda"); // This will throw an error
} catch (e) {
    console.error(e.message); // Output: Car constructor must be called with 'new'
}

