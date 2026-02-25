
let testScore = 85;

switch (true) {
    case (testScore >= 95):
        console.log("Grade: A - Excellent");
        break;
    case (testScore >= 85):
        console.log("Grade: B - Above Expecttatio");
        break;
    case (testScore >= 70):
        console.log("Grade: C - Meets expectation");
        break;
    case (testScore >= 50):
        console.log("Grade: D - needs Improvement");
        break;
    default:
        console.log("Unsatisfactory - Required Trainging");
        
}
