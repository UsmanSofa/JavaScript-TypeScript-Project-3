"use strict";
let arr = [12, 42, 45, 31, 23, 12, 43, 23, 12];
let doubleArray = arr.map((value) => {
    return value * value;
});
console.log(`Normal Array:- ${arr}`);
console.log(`Double Array:- ${doubleArray}`);
