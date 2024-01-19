class computador{
     nome:String;
     ram:Number;
     cpu:Number;
     
    constructor(nome:string,ram:number,cpu:number){
        this.nome = nome;
        this.ram =  ram;
        this.cpu = cpu;
    }
}

const c1 = new computador('a',16,14);



console.log(c1.nome);
