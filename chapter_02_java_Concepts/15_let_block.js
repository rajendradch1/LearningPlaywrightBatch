// let a="Rajendra";

// {
//         console.log(a);   //output Rajendra
// }

// let a="Rajendra";

// if (true) {
//         console.log(a);   //Rajendra
// }

let a="Rajendra";

if (true) {
    console.log(a);  //now it will reflect error and tdz start
    let a="Singh";  

    }

{
    {
        console.log(a); //this will take value fron global as there is other declaration of a in block scope.
        {

}}}