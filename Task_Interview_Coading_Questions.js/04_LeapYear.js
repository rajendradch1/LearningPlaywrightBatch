/** Leap Year Checker:
Create a program that determines whether a given year is a leap year. 
A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
Use an if-else statement to make this determination.
Example; year = 2026 , no */

let year = 2026;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else
    console.log(year + " Year is not a leap year");



    //
/** a year is a leap year if it is divisible by 4, except for century years (ending in 00) that are not divisible by 400.
Examples: 2024 was a leap year, 2028 will be a leap year, and 2000 was a leap year, but 1900 was not.

2024 % 4 == 506 && 2024 % 100 ==20.24 so result will reflect from the first condition (year % 4 === 0 && year % 100 !== 0) 
as 2024 is not full divisible by 100 

2000 % 4 == 500 && 2000 % 100 == 0 but it's equal to zero so this condition will be false and result reflect as 
leap year from the second condition 2000 % 400 == 500

========Rules=======
---Leap Year Rule---
Every year that is exactly divisible by four is a leap year, 
except for years that are exactly divisible by 100, 
but these centurial years are leap years if they are exactly divisible by 400

*/