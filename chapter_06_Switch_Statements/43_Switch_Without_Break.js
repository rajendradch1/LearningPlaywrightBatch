// Without break in Switch
// 0- Sunday, 1- Monday, 2- Tuesday,....
// if not used break then when condition true after that all consicutive line will be print.
// break pull out from the statement
let day = 2;
switch (day) {
    case 0: 
        console.log("Sunday - Rest Day");
        
    case 1: 
        console.log("Monday - Sprint Planning");
        
    case 2: 
        console.log("Tuesday - Developement");
        
    case 3: 
        console.log("Wednesday - Code Review");
        
        case 4: 
        console.log("Thrusday - Testing");
        
    case 5: 
        console.log("Friday - Deployment & Retro");
        
    case 6: 
        console.log("Saturday - Rest Day");
        
     
}