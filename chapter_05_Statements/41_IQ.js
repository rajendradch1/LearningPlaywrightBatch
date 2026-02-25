
if ([]){
    console.log([]); // []  it will print it's truthy condition by default all objects are truthy in JavaScript
}

// case 1
let response;
if(response) { //plain if fails on 0, "" and false
    console.log(response);  // sometimes response can be 0, empty (blank) or false
}

// case 2
if (response !== null) { //!== catches both null undefined
    console.log(response);
}

console.log(5 == "5"); // true -->loose couple 
console.log(5 === "5"); // false --> strict comparision

console.log(5 == 5); // true -->loose couple 
console.log(5 === 5); // false --> strict comparision

// in QA we always use === when ever it required.

// Can i have an else if without a final else?
// Yes the final else is optional but in QA automation always include a final else to dispaly failure message.
if (true){

}
else if (false) {

} 
//else {  

//}