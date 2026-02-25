// Switch with default
// 0- Sunday, 1- Monday, 2- Tuesday,....
// In this case 10 will not match with any value so default will print
let day = 10;
switch (day) {
    case 0: 
        console.log("Sunday - Rest Day");
        break;
    case 1: 
        console.log("Monday - Sprint Planning");
        break;
    case 2: 
        console.log("Tuesday - Developement");
        break;
    case 3: 
        console.log("Wednesday - Code Review");
        break;
    case 4: 
        console.log("Thrusday - Testing");
        break;
    case 5: 
        console.log("Friday - Deployment & Retro");
        break;
    case 6: 
        console.log("Saturday - Rest Day");
        break;
    default:
        console.log("Invalid day value!")
}