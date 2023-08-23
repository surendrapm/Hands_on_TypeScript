"use strict";
function renderShape(shapes) {
    console.log("Rendered!");
}
function CalculateArea(shapes) {
    console.log("Area rendered");
}
// "|" 
renderShape({
    radius: 10
});
//"&"
CalculateArea({
    radius: 10,
    side: 20,
    width: 30,
    height: 40
});
