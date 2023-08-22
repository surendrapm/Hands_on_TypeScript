"use strict";
//still problem in this fun call due to randomgebrrish string as parameter
function calculate(a, b, type) {
    switch (type) {
        case "add":
            return a + b;
        case 'mul':
            return a * b;
        case 'div':
            return a / b;
        case 'sub':
            return a - b;
    }
    return -1;
}
//still problem in this fun call due to randomgebrrish string as parameter
console.log(calculate(10, 68, "mu11l"));
//strict parameter checking before using arguments we declared there values to verify 
//due to this ts before only checks string is alid or not
function strictCalculate(a, b, type // predefined types
) {
    switch (type) {
        case "sum":
            return a + b;
        case 'mul':
            return a * b;
        case 'div':
            return a / b;
        case 'sub':
            return a - b;
    }
    return -1;
}
//this one is good one becoz we cannot send any random gebbrish string as parameter
console.log(strictCalculate(5, 8, "div"));
