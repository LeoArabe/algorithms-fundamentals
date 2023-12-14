let n1 = 1;
let n2 = 2;
let somaPar = 0;

while(n2 <= 4000000){
    n2 += n1
    n1 = n2 - n1; 
    if(n2 % 2 === 0){
        somaPar += n2
    }
    
}

console.log(somaPar)
