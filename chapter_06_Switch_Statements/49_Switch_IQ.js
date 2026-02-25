/**
switch(x) {
    case a: 
        let b = 1;
    break;
    case a:
        let b = 2; 
        break;

} // switch does not allow two same let values in case like a
*/

/**
switch(x) {
    case a: 
        let b1 = 1;
    break;
    case a:
        let b2 = 2;  
        break;

} // x is not defined
 */

/**
let x = 10;
switch(x) {
    case a: 
        let b1 = 1;
    break;
    case a:
        let b2 = 2;  
        break;

} // a is not defined it's matching condition it should be the value
 */

// can we have same condition two types in switch
// Yes two case values can be same in switch
// but it always take the first value.
// while in jave two same values not happen

let x = 10;
switch(x) {
    case 10: 
        let b1 = 1;
        console.log(b1);
    break;
    case 10:
        let b2 = 2; 
        console.log(b2); 
        break;
    default:
        console.log("d");
 //   default:
//      console.log("E");
// default clouser can not be allowed more than once
} 