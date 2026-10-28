"use strict";
let arr7 = [12, 43, 54, 56, 78, 12];
function evenNumbers() {
    let even = [];
    for (let i = 0; i < arr7.length; i++) {
        if (arr7[i] % 2 == 0) {
            even.push(arr7[i]);
        }
    }
    return console.log(`Even Numbers of Array is: ${even}`);
}
evenNumbers();
