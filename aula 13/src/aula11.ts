soma()

function soma():void{
    console.log('soma')
}
//sominha() arrow funcion n funciona antes da função ser definida

const sominha=():void=>{
    console.log('soma')
}

function somandonovamente(n1:number,n2:number=0):number{
    return n1+n2
}
function somandonovamenteteste(n1:string,n2?:string):string{
    return n1+n2
}

const naousoreduce=(ns:number[]):number=>{
    let i = 0
    ns.forEach((elementos)=>{
        i += elementos
    })
    return i
}

let number:Number[]=[10,50,60,90];

sominha()
console.log(somandonovamente(5,5))
console.log(somandonovamenteteste('a'))
console.log(naousoreduce([1,5,8,6,20,20]))
console.log(naousoreduce(number))