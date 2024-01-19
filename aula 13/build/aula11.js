"use strict";
soma();
function soma() {
    console.log('soma');
}
const sominha = () => {
    console.log('soma');
};
function somandonovamente(n1, n2 = 0) {
    return n1 + n2;
}
function somandonovamenteteste(n1, n2) {
    return n1 + n2;
}
const naousoreduce = (ns) => {
    let i = 0;
    ns.forEach((elementos) => {
        i += elementos;
    });
    return i;
};
let number = [10, 50, 60, 90];
sominha();
console.log(somandonovamente(5, 5));
console.log(somandonovamenteteste('a'));
console.log(naousoreduce([1, 5, 8, 6, 20, 20]));
console.log(naousoreduce(number));
