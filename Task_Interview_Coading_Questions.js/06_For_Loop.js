// Print "Hello" 5 times

for(let i = 0; i < 5; i++){
    console.log("Hello");
}

// Printing numbers from 1 to 10

for (let i = 1; i <= 10; i++ ){
    console.log(i);
}

// Print even numbers from 1 to 20 
// 0 will also be considered in the list of even number

for (let i = 0; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i," is even number");
    }
}

// Print the sum of first 10 natural numbers
// natural number will start from 1 to continue
// first 10 natural numbers from 1 to 10

let sum = 0;
for (let i = 1; i <= 10; i++){
    sum = sum + i;
} 
console.log(sum);

// Print the multiplication table of 5 

let n = 5; // The number for which to generate the table
console.log(`Multiplication Table of ${n}:`);

// Use a for loop to iterate from 1 to 10
for (let i = 1; i <= 10; i++) {
  // Calculate the product
  let result = n * i;

  // Print the result in a readable format
  console.log(`${n} x ${i} = ${result}`);
}