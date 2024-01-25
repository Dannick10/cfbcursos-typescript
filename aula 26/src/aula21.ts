
abstract class Conta{
    
    //public acesso em qualquer ougar
    //private acessado somente na sua propria classe
    //protect acessado na classe pai e classe filho
    //abstract não permite criação pela conta pai
    //readonly não permite alteração depois que é atribuido

   private readonly numero:number
   protected titular:string
   protected saldoConta:number 
  

    constructor(titular:string){
        this.numero = Math.floor(Math.random()*100000000000)
        this.titular = titular   
        
        }

    protected getinfo():void{
         console.log(`Numero: ${this.numero} \n Titular: ${this.titular}`)
        }

   protected setTitular(p:string):string{
        return this.titular = p 
         }

    get saldo():number{
        return this.saldoConta
         }

    set saldo(saldoConta:number){
        this.saldoConta = saldoConta
         }

    protected depoisito(valor:number){
        if(valor <0){
            console.log('valor invalido')
            return
        }
        this.saldoConta += valor
    }

    protected saque(valor:number){
        if(valor <0){
            console.log('valor invalido')
            return
        }
        if(valor <= this.saldoConta){
        this.saldoConta -= valor
        } else {
             console.log('saldo insufiicente')
        }

    }    
    
    

}

interface tributos{
    taxaCalculo:number;
    calcularTrib(valor:number):number;
}


class ContaPf extends Conta implements tributos{
    protected cpf:number 
    taxaCalculo=10
    constructor(cpf:number,titular:string){
        super(titular)
        this.cpf = cpf
         }

    calcularTrib(valor: number): number {
        return valor*this.taxaCalculo
         }

    public info(){
        super.getinfo()
        console.log(`CPF: ${this.cpf}`)
         }
    
     public depoisito(valor:number){
        if(valor > 1000){
            console.log('calor de depositor muito grande')
        }else{
            super.depoisito(valor)
        }
    }

    public saque(valor:number){
        if(valor>1000){
            console.log('valor de saque muito grande')
        }else{
            super.saque(valor)
        }
    }

}

class ContaPj extends Conta {
    protected  cnpj:number 

    constructor(cnpj:number,titular:string){
        super(titular)
        this.cnpj = cnpj
     
    }

    public info(){
        super.getinfo()
        console.log(`CNPJ: Saldo: ${this.saldoConta}`)
    }

    public depoisito(valor:number){
        if(valor > 10000){
            console.log('calor de depositor muito grande')
        }else{
            super.depoisito(valor)
        }
    }

    public saque(valor:number){
        if(valor>10000){
            console.log('valor de saque muito grande')
        }else{
            super.saque(valor)
        }
    }

}



const cont1pf = new ContaPf(222333,'Daniel')
cont1pf.depoisito(100)
cont1pf.saque(100)
console.log(cont1pf.saldo = 50)
