"use strict";
class computador {
    nome;
    cpu;
    ram;
    ligado;
    constructor(nome, cpu, ram, ligado) {
        this.nome = nome;
        this.cpu = cpu;
        this.ram = ram;
        this.ligado = false;
    }
    info() {
        console.log(`nome: ${this.nome} \n cpu: ${this.cpu} \n ram: ${this.ram} \n Ligado ${this.ligado ? 'sim' : 'nao'}\n.........................`);
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
let c1 = new computador('pczinho', 23, 4, false);
let c2 = new computador('pc gamer', 100000, 100000, false);
c1.ligar();
c2.ligar();
c2.desligar();
c1.info();
c2.info();
