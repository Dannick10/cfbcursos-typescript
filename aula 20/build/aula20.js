"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = Math.floor(Math.random() * 100000000000);
        this.titular = titular;
    }
    getinfo() {
        console.log(`Numero: ${this.numero} \n Titular: ${this.titular} \n `);
    }
    setTitular(p) {
        return this.titular = p;
    }
}
class ContaPf extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta cpf Criada:${cpf}`);
    }
}
class ContaPj extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`${titular}`);
        console.log(`Conta cnpj Criada: ${cnpj}`);
    }
}
const cont1 = new ContaPf(222333, 'Daniel');
cont1.getinfo();
const cont2 = new ContaPj(15479546, 'Fabricio');
cont2.getinfo();
