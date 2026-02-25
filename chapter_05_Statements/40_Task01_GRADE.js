
/** Task01 -> Grade Calculator-> Write a program that calculates and display the letter grade for the given 
numerical score (eg A, B, C, D or F) based on the following grading score-
A: 90 to 100
B: 80 to 89
C: 79 to 70
D: 69 to 60
F: 0 to 59

*/

let score = 75 ;
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
} else 
    console.log("Please enter the number from 0 to 100");
