// Prototypes
let computer={cpu:12};
let lenovo={screen:"HD",
    _proto_:computer
};
let tomHardware={cpu:12,screen:"HD",keyboard:"US"};

console.log(tomHardware);

// Prototype
let computerPrototype={
    cpu:12,
    
    keyboard:"US",
    _proto_:lenovo
}

console.log(computerPrototype.cpu);
console.log('lenovo',lenovo.__proto__);


let genericCar={tyres:4};

let bmw={tyres:4,
    driver:"AI",
    
};

Object.setPrototypeOf(bmw,genericCar);

console.log('bmw',Object.getPrototypeOf(bmw));


// Let's understand prototypes in JavaScript with some simple code examples:

// 1. Every object in JavaScript has a prototype (except the base Object).
let animal = {
    eats: true
};

// Create a new object that inherits from animal
let rabbit = Object.create(animal);
rabbit.hops = true;

console.log('rabbit.eats:', rabbit.eats); // true, inherited from animal
console.log('rabbit.hops:', rabbit.hops); // true, own property

// 2. You can check the prototype of an object using Object.getPrototypeOf
console.log('Prototype of rabbit:', Object.getPrototypeOf(rabbit) === animal); // true

// 3. You can set the prototype of an object using Object.setPrototypeOf
let dog = { barks: true };
Object.setPrototypeOf(dog, animal);

console.log('dog.eats:', dog.eats); // true, inherited from animal

// 4. Functions have a prototype property, which is used when creating objects with 'new'
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    return "Hello, " + this.name;
};

let alice = new Person("Alice");
console.log(alice.greet()); // "Hello, Alice"

// 5. The prototype chain: If a property is not found on the object, JavaScript looks up the prototype chain
console.log(alice.hasOwnProperty('greet')); // false, it's on the prototype
console.log(Object.getPrototypeOf(alice) === Person.prototype); // true

// In summary, prototypes allow objects to inherit properties and methods from other objects.



