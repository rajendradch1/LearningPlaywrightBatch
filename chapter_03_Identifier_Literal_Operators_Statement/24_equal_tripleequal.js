// =, ==, ===

let a = 5;

//console.log(5 = 5); // not allowed in JS
// we can not assign 5 value into 5

console.log(5 == 5); // true
console.log(5 ===5); // true

console.log(5 == "5"); // true sikh and hindu example 
console.log(5 === "5"); // false 

//in loose comparission, compare bsed on the values and datatype which one will be true it will display the true value like OR gate 
// while in strict comparission first its compare the data type and then value and both shoud be true like AND gate

console.log(null == undefined); // true  special case they are equal in loose comparision
console.log(null === undefined); // false

console.log(5 == 5.0); // true
console.log(5 ===5.0); // true
console.log(5 === 5.01); // false 




