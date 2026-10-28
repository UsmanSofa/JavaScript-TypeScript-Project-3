"use strict";
let arr5 = [10, 32, 43, 56, 21, 34, 32];
function totalEvenNumbers() {
    let count = 0;
    for (let i = 0; i < arr5.length; i++) {
        if (arr5[i] % 2 == 0) {
            count++;
        }
    }
    console.log(`Total Even Numbers in Array is:- ${count}`);
}
totalEvenNumbers();
