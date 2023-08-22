// type alias

//blueprint of types of object i.e explicitly defined
type User = {
    name:string,
    email:string,
    isactive:boolean
}

//assinged values according to above defined types
let User = {
    name:"surendra",
    email:"suredon456@gmail.com",
    isactive:true
}

function createUser(user:User){
     return "hello mr"+ " " + user.name + " " +"your email:-" + user.email + " " + "is" + " " + user.isactive + " " + "i.e valid"
}

console.log(createUser(User))