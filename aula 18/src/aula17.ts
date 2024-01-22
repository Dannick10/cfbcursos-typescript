class computador{
    private id:Number;
    public nome:String;
    private cpu:Number;
    private ram:Number;
    protected ligado:Boolean;

    constructor(nome:String,cpu:Number,ram:Number,ligado:Boolean,id:Number){
        this.nome = nome; 
        this.cpu = cpu;
        this.ram = ram;
        this.ligado = false;
        this.id = 0;
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

    upgradeRam(qtde:Number):void{
        if(qtde >= 0 && qtde <= 100){
            if(qtde == 100){
        this.nome = 'pctunado'
            }
        this.ram = qtde
        }else {
            console.log('não é permetido')
        }
    }

}


let c1 = new computador('pczinho',23,4,false,1)
let c2 = new computador('pc gamer',100000,100000,false,2)
c1.upgradeRam(100)
c1.ligar()
c2.ligar()
c1.info()
c2.info()
