// Print "Hello" 5 times

let i = 0;          // Initialization
while (i < 5) {     // Condition
    console.log("Hello");
    i++;            // Updation
}

// Printing numbers from 1 to 10

let m = 1;
while (m <= 10 ){
    console.log(m);
    m++;
}


// Print even numbers from 1 to 20 
// 0 will also be considered in the list of even number

let k = 0;
while (k <= 20){
    if (k % 2 === 0) {
        console.log(k," is even number");
  }
  k++;
}



// Print the sum of first 10 natural numbers
// natural number will start from 1 to continue
// first 10 natural numbers from 1 to 10

let sum = 0;
let p = 1;
while ( p <= 10 ){
    sum = sum + p;
    p++;
} 
console.log(sum);

// Print the multiplication table of 5 

let n = 5; // The number for which to generate the table
let r = 1;
console.log(`Multiplication Table of ${n}:`);

// Use a for loop to iterate from 1 to 10
while (r <= 10 ) {
  // Calculate the product
  let result = n * r;
  
  // Print the result in a readable format
  console.log(`${n} x ${r} = ${result}`);
  r++;
}