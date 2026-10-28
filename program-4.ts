let arr3 = [13,54,33,6,3,23,43];

function largestElement(){
    let max = arr3[0];
    for(let i = 0; i < arr3.length ; i++){
        if(max < arr3[i]){
            max = arr3[i];
        }
    }
    console.log(`Largest Element Of Array is:- ${max}`);
    
}
largestElement();