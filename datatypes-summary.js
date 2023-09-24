/* Primitive Datatypes : -
(1) String
(2) Number
(3) Boolean
(4) Null
(5) Undefined
(6) Symbol
(7) BigInt
*/

// JavaScript is a dynamically typed language,

/* Non-Primitive Datatypes : -
(1) Array
(2) Objects
(3) Functions
*/

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNum = 8783787487387888n

// Array
const heros = ["darthvader","thanos","joker"]
// Object
let myObj = {
    name: "Archit",
    age: 17,
}
// Function
const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof bigNum);

// link for typeof operator : - https://tc39.es/ecma262/#sec-typeof-operator

// -----------------------------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let mySocialname = "architukedotxyz"

let anotherName = mySocialname

anotherName = "ukearchit"

/* console.log(mySocialname);
console.log(anotherName);
 */
let userOne = {
    email : "user@yandex.ru",
    upi : "user1@ybl"
}

let userTwo = userOne

userTwo.email = "archituke@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);