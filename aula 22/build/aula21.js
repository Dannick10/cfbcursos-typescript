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
    get saldo() {
        return this.saldoConta;
    }
    set saldo(saldoConta) {
        this.saldoConta = saldoConta;
    }
    depoisito(valor) {
        if (valor < 0) {
            console.log('valor invalido');
            return;
        }
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log('valor invalido');
            return;
        }
        if (valor <= this.saldoConta) {
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
    saque(valor) {
        if (valor > 1000) {
            console.log('valor de saque muito grande');
        }
        else {
            super.saque(valor);
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
    saque(valor) {
        if (valor > 10000) {
            console.log('valor de saque muito grande');
        }
        else {
            super.saque(valor);
        }
    }
}
const cont1pf = new ContaPf(222333, 'Daniel');
cont1pf.depoisito(100);
cont1pf.saque(100);
console.log(cont1pf.saldo = 100);
cont1pf.depoisito(180)
cont1pf.saque(50)
cont1pf.info()
console.log(cont1pf.saldoConta)
