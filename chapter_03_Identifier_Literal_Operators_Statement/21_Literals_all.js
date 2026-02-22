let count = 42;
let negative = -100;
let zero = 0;

let h = 0xFF; //hexadecimal number for color
let color_hex = 0xFF000;
console.log(color_hex);

let octal = 0o77;
let pi = 3.1467;

let million = 1e5;
let tiny = 1.5e-4;

// Single quotes
let single = 'Hello world';
let withDouble = 'She said "hi"';

//let name1 = 'it's a test' ; // Error as single quote is already in it you have to use double quote.

//double quote ->double quotes are safe
let double = "Hello World";
let WithSingle = "it's a test";

//template Literal
// template Literal is also supported
let first_name = "Rajendra";
let full_name = `Hi, ${first_name} Singh`; //using tilled operator
console.log(full_name);
// outpot-> Hi, Rajendra Singh this is called as template literal if you want to replace the value.

let math =`2+2=${2 + 2}`;
console.log(math);

// I want to store path of the file
let path = "c:\\users\\pramod\\file.txt";
// Single slash is not allowed, we have to use double backword slash.
// in path used always backword slash \
console.log(path);

let address = "https://app.vwp.web/#login";
// in url used always forword slash /

// ----> \\-->used in path
// ---->  // -- used in urls

// String literal edge cases
let empty = "";         // empty string (falsy!)
let space = " ";        // single space (truthy!)
let zero1 = "0";        // string zero (truthy!)

let isLoggedIn = true;
let hasPermission = false;
