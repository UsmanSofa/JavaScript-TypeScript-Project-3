"use strict";
let arr1 = [14, 53, 67, 82, 32];
function sumOfArray() {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    console.log(`Sum of Elements of Array is:- ${sum}`);
}
sumOfArray();
