function recursiveCollatz(number, process = 0) {
    if (number > 1) {
        if (number % 2 === 0) {
            number /= 2;
        } else {
            number = number * 3 + 1;
        }
        process++
        return recursiveCollatz(number, process)
    }
    return process;
}

let number = 12;

console.log(`---------------------------------------------------
São ${recursiveCollatz(number)} passos para ${number} chegar em 1 conforme as regras 
----------------------------------------------------`);