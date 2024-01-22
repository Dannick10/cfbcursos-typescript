class Conta{
    numero:Number
    titular:String

    constructor(titular:String){
        this.numero = Math.floor(Math.random()*100000000000)
        this.titular = titular
    }

    getinfo():void{
         console.log(`Numero: ${this.numero} \n Titular: ${this.titular} \n cpf|cnpj ${this.cpf || this.cnpj} \n ______________`)
         
    }

    setTitular(p:string):string{
        return this.titular = p 
    }
}

class ContaPf extends Conta {
    cpf:Number 

    constructor(cpf:Number,titular:String){
        super(titular)
        this.cpf = cpf
    }

}

class ContaPj extends Conta {
    cnpj:Number 

    constructor(cnpj:Number,titular:String){
        super(titular)
        this.cnpj = cnpj
    }
}

const cont1 = new ContaPf(222333,'Daniel')
cont1.getinfo()

const cont2 = new ContaPj(15479546,'Fabricio')
cont2.getinfo()