// can we make it onelinner

// true
if ("hello") console.log("String is truthy"); 
// "hello" = truthy
// befault string is true it reflect truthy value
if (76) console.log("Number is truthy");
if ({}) console.log("Empty boject is truthy");
if ([]) console.log("Empty array  is truthy");

// false results
if ("") console.log("Would not print");
// empty "" defalt falsy result
if (null) console.log("Would not print");
if (undefined) console.log("Would not print");
if (Nan) console.log("Would not print");
if (0) console.log("Would not print");