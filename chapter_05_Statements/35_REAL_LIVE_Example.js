let isLoggedIn = true;
let userRole = "editor";
// app.vwo.com -> viewer, editor, admin
// viewer = Limited view
// editor = can edit and view 
// admin = can do all the things

// if(isLoggedIn == ture)  isLogged is already true so the write the condition as below
if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all the things");
    } else if (userRole === "editor") {
        console.log("Welcome Editor: Edit access granted");
    } else if (userRole === "viewer"){
        console.log("Welcome Viewer - Read Only Access");
     } else {
        console.log("No idea which role you are!");
     }
} else {
    console.log("Yor are not logged in!!");
}