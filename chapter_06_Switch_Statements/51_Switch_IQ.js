let status = 0;
switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}
// switch is strict match so 0 match

let age = 20;
let canVote = age >= 18 ? "Yes, can Vote" : "No, too young";
console.log(canVote);

let status1 = "active";
let msg = status1 === "active" ? "user is active" 
        : status1 === "inactive" ? "user is inactive" 
        : status1 === "banned" ? "user is banned" 
        : "Unknown status";
console.log(msg);
// here ternary operator is used as if/else loop misuse of ternary operator

let name1 = "" ? "Has name" : "No name";
console.log(name1);
// "No name" empty string is falsy
let name2 = "" || "Default2";
console.log(name2);
// "Default2" (empty string is falsy)

let name3 = 0 || "Default3";
console.log(name3); 
// "Default3" 0 is falsy

let name4 = true ? "" : "Default4";
console.log(name4);
// default it's true so empty "" will be print.

let name5 = undefined ?? "default5";
console.log(name5);
// "default5"   




