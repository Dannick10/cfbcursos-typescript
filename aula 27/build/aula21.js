"use strict";
function f_teste(v, r) {
    return r;
}
console.log(f_teste(5, 8));
console.log(f_teste('OPA', 'a'));
console.log(f_teste(true, 5));
console.log(f_teste([10, 20, 30], ['a', 'b', 'c']));
class c_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
let a = new c_teste(4);
let b = new c_teste('opa');
console.log(a.valor);
console.log(b.valor);
