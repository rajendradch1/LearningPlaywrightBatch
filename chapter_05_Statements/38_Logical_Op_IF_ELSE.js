
let username = "Dev";
let password = "secure123";
let IsAccountLocked = false;

if ((username === "Dev" && password === "secure123") && !IsAccountLocked) {
    console.log("Allowed to enter");
} else {
    console.log("not allowed to enter");
}