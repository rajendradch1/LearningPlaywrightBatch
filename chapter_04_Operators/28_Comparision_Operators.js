// Comparision Operator (will always result in boolean either true or false)

// =, ==, ===
// = -> Assignment operator
// == -> loose comparision (sikh vs hindu)
// === -> strict comparision (sikh vs hindu, language, livig)

// >, <, >=, <=, !, !=, !==
//!=== this one nothing does not exist.

console.log(3 > 4); // false
console.log(3 < 4); // true
console.log(4 >= 4); // true --> 4 > 4 or 4===4 concept of OR gate
console.log(3 <= 4); // true

console.log(5 == "5"); // true -->loose couple 
console.log(5 === "5"); // false --> strict comparision

console.log(5 != "5"); // false -->5 = int, "5" string but the value is equal as 5 so idealy it's result will be true
// but here we are using not operator while due loose couple and OR gate concept is equal so the result will be false.
console.log(5 !== "5"); // true --> strict couple
//console.log(5 !=== "5") it does not exist
// >== not allowed
