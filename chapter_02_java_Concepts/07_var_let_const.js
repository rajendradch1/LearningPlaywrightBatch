// var , let , const  ->let is best

//function scoped

/**
var a = 10; //global scope
console.log(a);

//definition of function
function printHello() {
    console.log("Hello TestingAcademy");
    var a = 20;  //local variable 20
    console.log(a);
    if(true){
        var a = 30; // 30
    }
    console.log("Focus on it->",a);  //it should print 20 but it will print 30 as var declation work within function
}
//calling of function
printHello();

// var also allows re-declation 
var a = 10;
var a = 20; //no error redeclaration allowed
console.log(a); //20

//now this is the problem that var has not blocked scoped.
*/

//let - block scoped
let b = 20; //global scope
console.log(b);

//definition of function
function printHello(){
        console.log("Helloo testing Academy");
        let b = 30; //local scope
        console.log(b);
        if(true){
            let b = 40;
            console.log(b); //40
        }
        console.log("foc->",b); //30
}
//calling of function
printHello();

//let does not allow re-declaration in the same scope
//let b = 40; //error: identifier 'b' has already been declared
// let a = 10;
// let a = 10;

let a = 10;
 a = 20;   //it's fine as we assinging value to a not declaring it
console.log(a); // 20


//var nn = "rajendra";
//let nn = "rajendra"; // Error: Identifier 'nn' has already been declared

const pi = 3.14 //constant variable
console.log(pi);
pi = 3.1456; // Error: Assignment to constant variable

