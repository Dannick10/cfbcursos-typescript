let numeros:number[]=[20,30,40];
//let numeros:Array<number|string>=[20,30,40,'cfbcursos'];

numeros.push(10);
numeros.unshift(20);
numeros.pop();
numeros.shift();
console.log(numeros);

let numeros_ro:ReadonlyArray<number>=[100,200,300]
console.log(numeros_ro)