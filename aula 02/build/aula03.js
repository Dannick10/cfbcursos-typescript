"use strict";
class curso {
    curso = null;
    canal = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new curso('CFB CURSO', 'TYPESCRIPT');
console.log(c1.canal);
console.log(c1.curso);
