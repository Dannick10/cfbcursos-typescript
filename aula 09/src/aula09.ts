
///nul = nulo
//underfined - indefinido

let vnome:string|null; 

vnome="Daniel";

console.log(vnome);

let vnome2:any;
vnome2=null;
console.log(vnome2);

let vnome3:unknown=vnome; //so pode ser atribuido em tipos unknow ou any
let vnum:any=vnome3;
console.log(vnome3);