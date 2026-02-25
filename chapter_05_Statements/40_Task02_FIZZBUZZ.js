
/** Task02 -> FizzBuzz Test ->  Write a program that prints the number from 1 to 100. 
 * How ever for multiplies of 3, print Fizz instead of the number, and for multiplies of 5
 * print Buzz instead of number, for the number that are multiplies of 3 and 5 both, print FizzBuzz.
*/

let number = 43 ;

/**
if ((number / 3 && number / 5) && (number % 3 === 0 && number / 5 === 0)) {
    console.log("FizzBuzz");
} else if (number / 5) {
    console.log("Buzz");
} else if (number / 3) {
    console.log("Fizz");
} else {
    console.log("Given number is not multiplies of 3 or 5");
}
    //it will not work.
*/

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
} else if (number % 5 === 0) {
    console.log("Buzz");
} else if (number % 3 === 0) {
    console.log("Fizz");
} else {
    console.log("Given number is not multiplies of 3 or 5");
}