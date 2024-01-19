class computador{
    processador:string='computador';
    ram:number=0;
    cpu:number=0;
    ligado:boolean=false;
}

const c1 = new computador();
const c2 = new computador();
const c3 = new computador();

c1.processador = 'hyzen 5600G'
c2.processador = 'intel 5'
c3.processador = 'intel 7'

console.log(c1.processador)
console.log(c2.processador)
console.log(c3.processador)