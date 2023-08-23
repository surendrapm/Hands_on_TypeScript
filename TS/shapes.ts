interface Circle {
   radius:number
   borderWidth?:number   //its an optional type it may or maynot
    
}

interface Square {
    side:number
}

interface Rectangle{
    width:number
    height:number
}


//also we can assing values interface types because it uses
//Union("|") and InterSections("&")
//Interfaces won't support this however it can be achived through extending

//("|")
type shapes = Circle | Square | Rectangle

//("&")
type shapesArea = Circle & Square & Rectangle
function renderShape(shapes:shapes){
    console.log("Rendered!")
}

function CalculateArea(shapes:shapesArea){
   console.log("Area rendered")
}

// "|" 
renderShape({                          
    radius:10 
})

//"&"
CalculateArea({
    radius:10,
    side:20,
    width:30,
    height:40
})