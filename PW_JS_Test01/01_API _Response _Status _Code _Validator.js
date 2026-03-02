
/**
 * - 200 → "PASS - OK: Request successful"
- 201 → "PASS - Created: Resource created successfully"
- 301 → "WARNING - Moved Permanently: URL has changed"
- 400 → "FAIL - Bad Request: Check request payload"
- 401 → "FAIL - Unauthorized: Check auth token"
- 403 → "FAIL - Forbidden: Insufficient permissions"
- 404 → "FAIL - Not Found: Check endpoint URL"
- 500 → "FAIL - Internal Server Error: Backend issue"
- Any other → "UNKNOWN - Unhandled status code"


 */
let statusCode = 404;
switch (statusCode){
    case 200:
        console.log("PASS - OK: Request successful");
        break;
    case 201:
        console.log("PASS - Created: Resource created successfully");
        break;
     case 404:
        console.log("FAIL - Not Found: Check endpoint URL");
        break;
    default:
        console.log("UNKNOWN - Unhandled status code");
    
}