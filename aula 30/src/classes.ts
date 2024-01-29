export namespace Veiculos{
export class Carro{
    nome:string 
    motor:Motores.Motor
    constructor(nome:string){
        this.nome = nome 
        this.motor = new Motores.Motor(100)
    }
}
}
export namespace Motores{
export class Motor{
    pot:number 
    constructor(pot:number){
        this.pot = pot 
    }
}
}
const c1 = new Veiculos.Carro('Mustang')

