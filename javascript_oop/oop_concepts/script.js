// Encapsulation Example
// Encapsulation is the concept of bundling data (properties) and methods that operate on that data within one unit (object).
// In JavaScript, we can achieve encapsulation using closures or ES6 classes with private fields.

console.log("=== Encapsulation ===");

// Using ES6 class with private fields (supported in modern JS)
class BankAccount {
    #balance; // private field
    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
    }
    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount("Alice", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.owner + "'s balance:", account.getBalance()); // 1300
// console.log(account.#balance); // Error: Private field

// Inheritance Example
// Inheritance allows one class (child/subclass) to inherit properties and methods from another (parent/superclass).

console.log("\n=== Inheritance ===");

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + " barks.");
    }
}

let animal = new Animal("Generic Animal");
animal.speak(); // Generic Animal makes a sound.

let dog = new Dog("Rex");
dog.speak(); // Rex barks.

// Polymorphism Example
// Polymorphism means "many forms". In JS, it allows different classes to define methods with the same name, and the correct one is called based on the object.

console.log("\n=== Polymorphism ===");

class Cat extends Animal {
    speak() {
        console.log(this.name + " meows.");
    }
}

let pets = [new Dog("Buddy"), new Cat("Whiskers"), new Animal("Creature")];
pets.forEach(pet => pet.speak());
// Output:
// Buddy barks.
// Whiskers meows.
// Creature makes a sound.

// Abstraction Example
// Abstraction means hiding complex implementation details and showing only the necessary features.
// In JS, we can use abstract base classes (by convention) and throw errors if abstract methods are not implemented.

console.log("\n=== Abstraction ===");

class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class Shape directly");
        }
    }
    area() {
        throw new Error("Method 'area()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}

// let s = new Shape(); // Error: Cannot instantiate abstract class
let c = new Circle(3);
let sq = new Square(4);
console.log("Circle area:", c.area());
console.log("Square area:", sq.area());
