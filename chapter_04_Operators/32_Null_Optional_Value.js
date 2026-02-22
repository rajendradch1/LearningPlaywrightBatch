/** let val = null ?? "default";
// Morden JS -> TypeScript

val = val + " Pramod";
console.log(val); // default Pramod
*/

/**
let val = null;
val = val + " Pramod";
console.log(val);  // null Pramdo
// this code may or may not be break
// Example of mother said to me go to market and take milk
*/

let amul = null;
let  val = null ?? " nandani milk"; 
let val2 = null ?? "default" // "default" (?? returns right side if left is null/undefined)
val ="which milk?" + val;
console.log(val);
// very useful in test data handling.

