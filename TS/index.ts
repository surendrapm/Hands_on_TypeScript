//any type 
//hint not good to use generally

let hero;


function returnhero(){
    return "thor"
}

console.log(returnhero())


// Primitive types :- number:34 , string:"devsurii" , boolean:true
//functions in typescript 

function addno(num:number):number{
    return num 
}

console.log(addno(3))
//we can not return two diffret types in predfined type of function 
//we can but there are diffrent way in TS
function loginUser(email:string,password:number,isresistred:boolean):string{
    if(email && password){
        return "logged inn"
    }
    //error because it boolean
   // return false
   return "sempty"
}

console.log(loginUser("suredon@gmail.com",12233,false))

const heros = ["thor","hulk","ironman"]

const printheros = heros.map((star):string=>{
   return `the heros are ${star}`
})


console.log(printheros)

// void type means function is not going to return any thing 
function err(error:string):void{
    console.log(error)
    
}

console.log("try catch error")