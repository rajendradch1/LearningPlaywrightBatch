/**
let a = 10;
let b = ++a;
console.log(a);
console.log(b);
// 11, 11

// Exppression and Result Table
// ERT 
// Line no     | a          | Result b
//  1          | 10         | na
//  2          | 11         | 11
//  3          | print 11   | na
//  4          | 11         | print 11

*/

/**
 
let a = 10;
console.log(a++ + a);
// A+B -> A --> a++ ( Exp - 10, a->11)
// +
// B -> 11, a-> 11 
// ExpA + ExpB -> 10 + 11

// output will be 21

*/

/**
 
let a = 10;
console.log(a++ + ++a);
console.log(a);
// 22 and 12

// A+B -> A --> a++ ( Exp - 10, a->11)
// +
// B -> 12, a-> 12
// ExpA + ExpB -> 10 + 12 ->>22   
// a-> 12

*/

/**
let a = 10;
console.log(++a + ++a);
console.log(a);
// 11 +12 = 23
// a->12

*/

// Decrement Operator
let a = 10;
let r = a--;
console.log(r);
// 10

let b = 10
let r2 = --b;
console.log(b);


