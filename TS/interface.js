"use strict";
// interface is also serve a similar purpose like types i.e structure and 
// behavior of objects
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(person) {
    return "Hello mr" + " " + person.name + " glad that your are " + person.age + " years old";
}
exports.greet = greet;
console.log(greet({
    name: "surendra",
    age: 21
}));
const date = new Date();
console.log(date);
class HireDeloper {
    constructor(name, skills, projects) {
        this.name = name;
        this.skills = skills;
        this.projects = projects;
    }
    printdata() {
        return this.name + " is ready for " + this.skills + " role";
    }
}
const DevloperData = new HireDeloper("surendra", "nodejs,reacts", 3);
console.log(DevloperData.printdata());
console.log(DevloperData);
function printDevdetails(details) {
    return details;
}
console.log(printDevdetails({
    name: "surendra",
    skills: {
        frontend: "ReactJS",
        backend: "Nodejs",
        totalskills: 2
    },
    projectA: "social Media-app",
    projectB: "Course-selling-app"
}));
//Out-Put 
// surendra@surendra-HP-Laptop-15s-fq2xxx:~/100x-dev-cohort/TypeScript_practice/TS$ node interface.js
// Hello mr surendra glad that your are 21 years old
// 2023-08-23T07:49:13.064Z
// surendra is ready for nodejs,reacts role
// HireDeloper { name: 'surendra', skills: 'nodejs,reacts', projects: 3 }
// {
//   name: 'surendra',
//   skills: { frontend: 'ReactJS', backend: 'Nodejs', totalskills: 2 },
//   projectA: 'social Media-app',
//   projectB: 'Course-selling-app'
// }
