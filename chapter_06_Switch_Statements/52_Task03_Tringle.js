let a = 5;
let b = 6;
let c = 7;

if(a === b && b === c && c === a){
        console.log("Equilateral Tringle");
}   else if (a === b || b === c || c === a) {
        console.log("Isosceles Tringle");
}   else 
        console.log("Scalene Tringle");
