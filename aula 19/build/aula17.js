"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = Math.floor(Math.random() * 100000000000);
        this.titular = titular;
    }
    getinfo() {
        console.log(`Numero: ${this.numero} <br> Titular: ${this.titular}`);
    }
    setTitular(p) {
        return this.titular = p;
    }
}
class ContaPf extends Conta {
}
class ContaPj extends Conta {
}
const cont1 = new ContaPf('daniel');
const cont2 = new ContaPj('Fabricio');
cont1.getinfo();
cont2.getinfo();
cont1.setTitular('Daniel Rocha');
cont1.getinfo();
