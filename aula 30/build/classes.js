"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motores = exports.Veiculos = void 0;
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(100);
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (exports.Veiculos = Veiculos = {}));
var Motores;
(function (Motores) {
    class Motor {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (exports.Motores = Motores = {}));
const c1 = new Veiculos.Carro('Mustang');
