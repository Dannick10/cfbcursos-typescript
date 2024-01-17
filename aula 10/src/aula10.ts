let number:number;
let svalor:string;
let uvalor:unknown; 

uvalor=10;
svalor='20';

number=<number>uvalor;
number=<number><unknown>svalor;

console.log(typeof(uvalor));
console.log(uvalor);

console.log(typeof(number));
console.log(number);

console.log(typeof(svalor));
console.log(svalor);