const { is } = require("express/lib/request");

let funnyNumber = 12345; // Convert to String
let funnyString = '12345'; // Convert to Number
let funnyTrue = '1'; // Convert to Boolean
let funnyFalse = '0'; // Convert to Boolean
let isTrue = false; // Convert to String
let isFalse = true; // Convert to Number
let funnyText = 'JavaScript is dynamic programming language.'; // Convert to Number
let funnyNull = null; // Convert to String
let funnyUndefined = undefined; // Convert to String
let isTruee = true; // Convert to String
let isFalsee = false; // Convert to String
let booleanString = 'true' // Convert to Number
let otherBooleanString = 'false' // Convert to Boolean

console.log(typeof funnyNumber.toString())
console.log(typeof Number(funnyString))
console.log(typeof Boolean(funnyTrue))
console.log(typeof Boolean(funnyFalse))
console.log(typeof isTrue.toString())
console.log(typeof Number(isFalse))
console.log(typeof Number(funnyText))
console.log(typeof String(funnyUndefined))
console.log(typeof isTruee.toString())
console.log(typeof String(isFalsee))
console.log(typeof Number(booleanString))
console.log(typeof Boolean(otherBooleanString))


let car = {make: "Citroen", model:"DS"};
for (let f in car) console.log(f)

