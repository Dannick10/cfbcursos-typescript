"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objetos = exports.coisas = void 0;
class Pessoa {
    nome;
    altura;
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
class Objetos {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objetos = Objetos;
const coisas = ['corda', 'pilha', 'lampada'];
exports.coisas = coisas;
exports.default = Pessoa;
