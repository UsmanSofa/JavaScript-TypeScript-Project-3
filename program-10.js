"use strict";
let arr9 = [10, 42, 45, 62, 67, 98];
function checkElement(x) {
    let findNum;
    findNum = arr9.includes(x);
    if (findNum == true) {
        console.log(`${x} exists in Array`);
    }
    else {
        console.log(`${x} does not exists in Array`);
    }
}
;
checkElement(10);
