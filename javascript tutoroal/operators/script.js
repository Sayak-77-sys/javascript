//operators in js
//arithmetic,comparison,logical,assignment,bitwise,ternary,unery

//arithmetic operators

let a=10;
let b=20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//comparison operators

let c=10;
let d=20;

console.log(c==d);
console.log(c!=d);
console.log(c>d);
console.log(c<d);
console.log(c>=d);

//logical operators

let e=true;
let f=false;

console.log(e&&f);
console.log(e||f);
console.log(!e);

//assignment operators
let g=10;
let h=20;

g+=h;
console.log(g);

g-=h;
console.log(g);

g*=h;

//bitwise operators

let i=10;
let j=20;

console.log(i&j);
console.log(i|j);
console.log(i^j);

//ternary operator

let k=10;
let l=20;

let result=k>l?k:l;
console.log(result);

//increment and decrement operators

let m=10;
let n=20;

console.log(m++);
console.log(m);
console.log(++m);
console.log(m);
console.log(m--);
console.log(m);
console.log(--m);
console.log(m);

//unery operators
// Unary operators examples
let num = 10;
let str = "hello";

// Unary plus (+) - converts to number
console.log(+num); // 10
console.log(+"123"); // 123
console.log(+"hello"); // NaN

// Unary minus (-) - negates the value
console.log(-num); // -10
console.log(-"123"); // -123

// Logical NOT (!) - inverts boolean value
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false
console.log(!"hello"); // false
console.log(!""); // true

// typeof operator - returns the type of operand
console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"

// void operator - evaluates expression and returns undefined
console.log(void 0); // undefined
console.log(void "hello"); // undefined
console.log(void (2 + 3)); // undefined

// delete operator - deletes object properties
let obj = {name: "John", age: 25};
console.log(obj.name); // "John"
delete obj.name;
console.log(obj.name); // undefined


//== vs ===

let p=10;
let q=10;

console.log(p==q);
console.log(p===q);

//==-> compares value only
//===-> compares value and type

//* vs **

let r=10;
let s=20;

console.log(r*s);
console.log(r**s);

//*-> multiplication
//**-> power

//*? vs ??


// instanceof

let arr=[1,2,3,4,5];
console.log(arr instanceof Array);

//in
{
let obj={name:"John",age:25};
console.log("name" in obj);

// object is a block scoped variable
}
