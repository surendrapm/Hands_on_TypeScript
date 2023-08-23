"use strict";
//types in typescript are same as interfaces with slight change in syntax
//it is also used to set the type for complex or bunch of variables
//but the major diffrence between types and interface is
// like interface types "cannot impliment classes" and also 
// "{cannot extends}" but itcan used as children properties
function printDetails(detail) {
    return detail;
}
console.log(printDetails({
    name: "suredra",
    age: 22,
    gender: {
        gender: "Male"
    }
}));
//Output
// surendra@surendra-HP-Laptop-15s-fq2xxx:~/100x-dev-cohort/TypeScript_practice/TS$ tsc
// surendra@surendra-HP-Laptop-15s-fq2xxx:~/100x-dev-cohort/TypeScript_practice/TS$ node types.js
// { name: 'suredra', age: 22, gender: { gender: 'Male' } }
// surendra@surendra-HP-Laptop-15s-fq2xxx:~/100x-dev-cohort/TypeScript_practice/TS$ 
