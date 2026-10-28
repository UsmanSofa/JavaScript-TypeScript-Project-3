let arr6 = [19,32,34,11,13,53,22]

function totalOddNumbers(){
    let Oddcount = 0;
    for(let i = 0; i < arr6.length;i++){
        if(arr6[i] % 2 != 0){
            Oddcount++;
        }
    }
    console.log(`Total Odd Numbers are:- ${Oddcount}`);
    
}

totalOddNumbers();