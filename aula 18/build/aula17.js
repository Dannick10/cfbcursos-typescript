"use strict";
class computador {
    id;
    nome;
    cpu;
    ram;
    ligado;
    constructor(nome, cpu, ram, ligado, id) {
        this.nome = nome;
        this.cpu = cpu;
        this.ram = ram;
        this.ligado = false;
        this.id = 0;
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
    upgradeRam(qtde) {
        if (qtde >= 0 && qtde <= 100) {
            if (qtde == 100) {
                this.nome = 'pctunado';
            }
            this.ram = qtde;
        }
        else {
            console.log('não é permetido');
        }
    }
}
let c1 = new computador('pczinho', 23, 4, false, 1);
let c2 = new computador('pc gamer', 100000, 100000, false, 2);
c1.upgradeRam(100);
c1.ligar();
c2.ligar();
c1.info();
c2.info();
