"use strict";
var Arithmatic;
(function (Arithmatic) {
    Arithmatic[Arithmatic["Add"] = 0] = "Add";
    Arithmatic[Arithmatic["Sub"] = 1] = "Sub";
    Arithmatic[Arithmatic["Div"] = 2] = "Div";
    Arithmatic[Arithmatic["Mul"] = 3] = "Mul";
})(Arithmatic || (Arithmatic = {}));
function Calculate(a, b, type) {
    if (type === Arithmatic.Add) {
        return a + b;
    }
    if (type === Arithmatic.Sub) {
        return a - b;
    }
    if (type === Arithmatic.Div) {
        return a / b;
    }
    if (type === Arithmatic.Mul) {
        return a * b && Arithmatic.Add;
    }
    return -1;
}
const ans = Calculate(10, 20, Arithmatic.Mul);
console.log(ans);
