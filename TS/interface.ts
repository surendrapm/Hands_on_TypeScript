// interface is also serve a similar purpose like types i.e structure and 
// behavior of objects

// creating objects types using interface
interface Person {
     name:string;
     age:number
}

export function greet(person:Person):string{
     return "Hello mr"+" "+person.name+" glad that your are " + person.age + " years old"  
}


console.log(greet({
     name:"surendra",
     age:21
}))


const date = new Date()
console.log(date)
// TakeDownPoint :- "The major Diffrence between Types and Interfaces is"
// "interfaces supprts class Implementation where Types are not"

interface Devloper {
     name:string,
     skills:string,
     projects:number
}


class HireDeloper implements Devloper{
     name:string
     skills: string;
     projects: number;

     constructor(name:string,skills:string,projects:number){
            this.name = name
            this.skills = skills
            this.projects = projects
     }

     printdata() {
          return this.name + " is ready for " + this.skills + " role"
     }
}

const DevloperData = new HireDeloper("surendra","nodejs,reacts",3)
     console.log(DevloperData.printdata())
console.log(DevloperData)


// there is another thing we do with  in interface is that we can use one use 
//interface in another interface exmaple is below

interface Devskills{
     frontend:string
     backend:string
     totalskills:number
}

interface Projects{
     projectA:string
     projectB:string
}
//also we use extends key word to use all properties of one interface
//next after current interface properties without any mentioning in current interface

interface DevloperDetails extends Projects{
     name:string
     skills:Devskills
}


function printDevdetails(details:DevloperDetails){
     return details
}

console.log(printDevdetails({
     name:"surendra",
     skills:{
          frontend:"ReactJS",
          backend:"Nodejs",
          totalskills:2
     },
     projectA:"social Media-app",
     projectB:"Course-selling-app"
}))


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
