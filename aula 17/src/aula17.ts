class computador{
    nome:String;
    cpu:Number;
    ram:Number;
    ligado:Boolean;

    constructor(nome:string,cpu:number,ram:number,ligado:Boolean){
        this.nome = nome; 
        this.cpu = cpu;
        this.ram = ram;
        this.ligado = false;
    }

    info():void{
        console.log(`nome: ${this.nome} \n cpu: ${this.cpu} \n ram: ${this.ram} \n Ligado ${this.ligado?'sim':'nao'}\n.........................`)
    }

    ligar():void{
        this.ligado = true
    }

    desligar():void{
        this.ligado = false;
    }

}
let c1 = new computador('pczinho',23,4,false)
let c2 = new computador('pc gamer',100000,100000,false)

c1.ligar()
c2.ligar()
c2.desligar()
c1.info()
c2.info()
