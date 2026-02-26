
/**
let a = 5;
let b = a++ + ++a;
console.log(b);
console.log(a);

// ExpA + ExpB here ExpA -> a++ ExpB -> ++a
// ExpA -> 5 -> a = 6
// +
// ExpB ->7 -> a = 7
// b = ExpA + ExpB  5 + 7 = 12
// output will be 12 
// a-> 7

*/

let a = 5;
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;
console.log(b);
console.log(c);
console.log(a);

// 12, 48, 12

// it's for let b -->ExpA + ExpB here ExpA -> a++ ExpB -> ++a
// it's for let c -->> ExpA1 + ExpB1 + ExpC1 + ExpD1 + ExpE1 here ExpA -> a++ ExpB -> ++a etc
// ExpA -> 5 -> a = 6
// +
// ExpB ->7 -> a = 7
// b = ExpA + ExpB  5 + 7 = 12
// 
// ExpA1 -> 7 and a = 8 (post increment) 
// +
// ExpB1 -> 9 and a = 9
// +
// ExpC1 -> 10 and a = 10
// +
// Expd1 -> 11 and a = 11
// +
// ExpE1 -> 11 and a = 12
// ExpA1 + ExpB1 + ExpC1 + ExpD1 + ExpE1 
// ->> 7 + 9 + 10 + 11 + 11 ===  48
// and value of a will be print as 12
