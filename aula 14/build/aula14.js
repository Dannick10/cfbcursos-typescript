"use strict";
function fsoma(...n) {
    let s = 0, e = 0;
    n.forEach((elementos) => {
        s += elementos;
    });
    for (let li of n) {
        e += li;
    }
    return s + e;
}
console.log(fsoma(5, 5, 5, 20, 30, 40));
