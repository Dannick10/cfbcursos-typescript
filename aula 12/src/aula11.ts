function soma(n1:number = 0,n2:number = 0):number{
    return n1 + n2
}

console.log(soma(5))

function user(nome:string,senha:string,login?:boolean){
    console.log(nome)
    console.log(senha)
    console.log(login)
}

user('Daniel','123')