//definition of function
function getUserStatus() {
    //var status_code = undefined; //due to hoisting, the variable is declared but not assigned a value yet
    console.log(status_code); //undefined due to hoisting   
    var status_code = "active";
    console.log("User status is: " + status_code);
}

//step 2 calling the function
getUserStatus();