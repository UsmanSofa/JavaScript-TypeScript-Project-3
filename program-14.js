"use strict";
let arr13 = [12, 2, 14, 65, 22, 43, 68, 99, 12];
console.log(`Normal Array:- ${arr13}`);
let sortDescending = () => {
    arr13.sort((a, b) => b - a);
    arr13.reverse();
    console.log(`Descending Order Array is:- ${arr13}`);
};
sortDescending();
