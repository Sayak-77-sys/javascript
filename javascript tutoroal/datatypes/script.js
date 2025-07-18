//data types

//primitive data types
//number
//string
//boolean
//null
//undefined
//symbol
//bigint

//primitives -> aisi data types jinhko copy karne ko tumhe real copy mil jaaye 
//string,number ,boolean,null,undefined,symbol,bigint

//reference-> inko copy karbe par reak copy nahi milega but reference milega parent ka 
//array,object,function


let b=[1,2,3,4,5];

let a=b;

a.push(6);

console.log(a);
console.log(b);


//'' - single quotes

//"" - double quotes

//`` - backticks



//null
//iska matlab hai jaan boojh kar koi value nahi di 

//undefined ka matlab hai ek variable banaya lekin use koi value nahi di to by default jo value mili wo hai undefined 

//symbol->unique and immutable
//future mein hum kuch library use karenge ab is vase mein un libraried mein kai baar kuch fields hoti haiu jinse similar hum bhi bana dete hai aur galti se hamari banai hui fields us library ki originall fields ko change kar deta hai 


let obj={
    uid:1,
    name:"harsh",
    age:20,
    email:"test@User.com"
};

let uid=Symbol("001");


//Dyanamic typing ->js mein static typing nahi hota hai yaha hai dyanamic typing jiska matlab hai aap apna code change kar sakte ho kyuki yaha par dyanamic typing hota hai 

let m=12;
m="harsh";
m=true;

//type of quirks

//type coersion-> concept hai jis main aaapka ek type automatically convert ho jayega 

let x="5";
x+=1;
console.log(x);

//type coersion in js

let y=10;
let z="20";

console.log(y+z);

console.log(z-y);

//truthy vs falsy values

//falsy values-> false,0,null,undefined,NaN,empty string

//truthy values-> true,1,any number,any string,any object,any array,any function







