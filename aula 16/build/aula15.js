"use strict";
class computador {
    nome;
    ram;
    cpu;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
    }

    mostrar(){
        return console.log(`${this.nome} ${this.ram} ${this.cpu}`)
    }

    trocar(nome){
        return this.nome = nome
    }
}
const c1 = new computador('a', 16, 14);

c1.trocar('computadorzao')
c1.mostrar()