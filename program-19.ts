let arr = [12,54,32,67,89,12,32,1];

let newArr = arr.filter((i) =>{
    return i > 50;
})

console.log(`Array:- ${arr}`);
console.log(`Array with Values Greater Then 50 is:- ${newArr}`);

