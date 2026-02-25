
// you are working API validation
// In API you will get the response code like 200 - OK, 404 - url not found etc...

let responseCode = 404;

switch (responseCode) {

    case 200:
        console.log("200 -> OK");
        break;
    case 404:
        console.log("404 Not found");
        break;
    default:
        console.log("Not status code match");      
    
}