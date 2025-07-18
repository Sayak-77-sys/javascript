// var , let , const
/*
var a=12;

var b;
var b=10;
let b=10;
const b=10;
*/

//declarations and initializations

/*
var a ;//declaration
a=10;//initialization

var b=10;//declaration and initialization

var c=10;//declaration and initialization

var d=10;//declaration and initialization

var e=10;//declaration and initialization
*/

// jab bhi var banate hai toh usko global scope mein rakhte hai
// aur woh window mein add hota hai
// function scoped hota hai
//aap firse declare kar sakte ho aur error nahi dega
// aap usko reassign kar sakte ho
// aap usko redeclare kar sakte ho
// aap usko delete kar sakte ho
// aap usko update kar sakte ho
// aap usko read kar sakte ho
// aap usko access kar sakte ho

// let and const are block scoped
// aur woh window mein nahi add hota hai

// let and const are not hoisted
// aur woh window mein nahi add hota hai

// let and const are not redeclared
// aur woh window mein nahi add hota hai

 const dulha="lab";
 const dulhan="laby";

 //scope(global,block,function)

 var a=12;

 {
    var b=12;// var block scope nahi hota hai
 }

 //function scoped hota hai
function abcd(){
    if(true){
        var c=12;
    }
}

//reasssignment, redeclaration


//reassignment
var a=12;
a=13;


//redeclaration
var a=56;

let b=45;
b=56;

//redeclaration
let b=56;
//not allowed

const c=45;
c=56;

//redeclaration
//const c=56;
//not allowed


console.log(d);

//temporal dead zone- utna area jaha js ko pata hai ki let aur const hai but ushe access nahi kar sakte


let d=0;


//hoisting impact per type 
//hoisting-> ek variable ko jab js mein banate hai to wo variable ka declaration ko upar chale jata hai aur initialization ko niche chale jata hai

var a=12;
var a=undefined;
a=12;


//explanation

var a =undefined;

console.log(a);

a=12;


//var ->hoist->undefined 
//let ->hoist->error
//const ->hoist->error

const person ={name:"sayak"};
person.name="sayak1";

 person={};//error




