enum Arithmatic {
    Add,
    Sub,
    Div,
    Mul
}


function Calculate(a:number,b:number,type:Arithmatic):number{
     if(type === Arithmatic.Add){
         return a+b
     }
     if(type === Arithmatic.Sub){
         return a-b
     }
     if(type === Arithmatic.Div){
         return a/b
     }
     if(type === Arithmatic.Mul){
         return a*b && Arithmatic.Add
     }
       return -1
    }

    const ans = Calculate(10,20,Arithmatic.Mul)

    console.log(ans)