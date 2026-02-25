
let value = "5";

switch (value) {
    case 5:
        console.log("Number 5 matched");
        break;
    case "5":
        console.log("String '5' matched");
        break;

}

// String '5' will be matched as switch uses strict match.
// switch uses ===, so "5" !== 5 (different types)
