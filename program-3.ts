let arr2 = [10,43,56,23,65,32];

function averageOfArray(){
    let avg = 0;
    let sum = 0;
    for(let i = 0; i < arr2.length;i++){
        sum+= arr2[i];
    }
    avg = Math.floor(sum / arr2.length);
    console.log(`Average of Array is ${avg}`);
}

averageOfArray();