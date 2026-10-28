"use strict";
let arr4 = [10, 4, 3, 24, 65, 12, 43];
function smallestElement() {
    let min = arr4[0];
    for (let i = 0; i < arr4.length; i++) {
        if (min > arr4[i]) {
            min = arr4[i];
        }
    }
    console.log(`Smallest Element Of Array is ${min}`);
}
smallestElement();
