"use strict";
// type alias
//assinged values according to above defined types
let User = {
    name: "surendra",
    email: "suredon456@gmail.com",
    isactive: true
};
function createUser(user) {
    return "hello mr" + " " + user.name + " " + "your email:-" + user.email + " " + "is" + " " + user.isactive + " " + "i.e valid";
}
console.log(createUser(User));
