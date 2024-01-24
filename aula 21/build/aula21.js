"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = Math.floor(Math.random() * 100000000000);
        this.titular = titular;
    }
    getinfo() {
        console.log(`Numero: ${this.numero} \n Titular: ${this.titular}`);
    }
    setTitular(p) {
        return this.titular = p;
    }
    saldo() {
        return this.saldoConta;
    }
    depoisito(valor) {
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log('saldo insufiicente');
        }
    }
}
class ContaPf extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        super.getinfo();
        console.log(`CPF: ${this.cpf}`);
    }
    depoisito(valor) {
        if (valor > 1000) {
            console.log('calor de depositor muito grande');
        }
        else {
            super.depoisito(valor);
        }
    }
}
class ContaPj extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        super.getinfo();
        console.log(`CNPJ: Saldo: ${this.saldoConta}`);
    }
    depoisito(valor) {
        if (valor > 10000) {
            console.log('calor de depositor muito grande');
        }
        else {
            super.depoisito(valor);
        }
    }
}
const cont1pf = new ContaPf(222333, 'Daniel');
console.log(cont1pf.depoisito(100))

cont1pf.info();
const cont2pj = new ContaPj(15479546, 'Fabricio');
cont2pj.info();
