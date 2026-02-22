/**
0 == "";   // true (both convert to 0)
0 == "0"; // true
0 == false  // true
null == undefined  // true
"\t\n" == 0  // true

// Rule breaker dangerous conversion

null == 0;  // false
null == "" // false
null == false // false
undefined == 0 // false
undefined == "" // false
undefined == false // false
//Nan == Nan // false

console.log("" === false); // false
console.log("" == false); // true
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(0 === false); // false
console.log("0" == false); // true
console.log("" == 0); // false
*/


console.log("" == "0"); // false
console.log("" == 0);  // true
var a = 0 / 0 ;
console.log(a);
var a1 = 0.0 / 0.0 ;
console.log(a1); // NaN

let a2;
console.log(a2);

let a3 = null;
console.log(a3);
let red = "#FF0000";
console.log(red);


