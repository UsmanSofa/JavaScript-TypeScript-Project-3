"use strict";
let arr8 = [11, 3, 5, 4, 6, 8, 14, 23];
function oddNumbers() {
    let odd = [];
    for (let i = 0; i < arr8.length; i++) {
        if (arr8[i] % 2 != 0) {
            odd.push(arr8[i]);
        }
    }
    return console.log(`Even Numbers of Array is: ${odd}`);
}
oddNumbers();
