function f_teste<T,U>(v:T,r:U):U{
    return r 
}

console.log(f_teste<number,number>(5,8))
console.log(f_teste<string,string>('OPA','a'))
console.log(f_teste<boolean,number>(true,5))
console.log(f_teste<number[],string[]>([10,20,30],['a','b','c']))

class c_teste<T>{
    public valor:T
    constructor(valor:T){
        this.valor = valor
    }

}

let a = new c_teste<number>(4)
let b = new c_teste<string>('opa')

console.log(a.valor)
console.log(b.valor)
