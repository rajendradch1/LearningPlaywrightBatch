
/** Task01 -> Grade Calculator-> Write a program that calculates and display the letter grade for the given 
numerical score (eg A, B, C, D or F) based on the following grading score-
A: 90 to 100
B: 80 to 89
C: 79 to 70
D: 69 to 60
F: 0 to 59

*/

/**
let score = 75 ;

if (score === )
if (score >= 90) {
    console.log("Grade of student -> A");
} else if (score >= 80) {
    console.log("Grade of student -> B");
} else if (score >= 70) {
    console.log("Grade of student -> C");
} else if (score >= 60) {
    console.log("Grade of student -> D");
} else if (score >= 0) {
    console.log("Grade of student -> F");
} else {
    console.log("Please enter the number from 0 to 100");
}
    */

let grade;
let score = 75;

if (typeof score !== "number"){       // here number not equal to string if score = pramod then type of score will retrun number which is not equal to sting
    console.log("Are you fool, why you are giving score as not a number");
    return; // return empty means it will exit the program
}

if (score < 0 || score > 100){
    console.log("Are you fool, why you are giving score as not a number");
    return; 
}
// These are the edge cases and that should also be considred in programming

if (score >= 90){
    grade = "A";
} else if (score >=80){
    grade = "B";
} else if (score >=70){
    grade = "C";
} else if (score >=60){
    grade = "D";
} else {
    grade = "F";
}
console.log("For the score,", score, "Grade is -->", grade)

// can we templetize it

console.log(`For the score, ${score} Grade is --> ${grade}`);

// this is called template literal