const arraySetts = [1, 2, 3, 4];
const size = arraySetts.length;
const totalSubsets = Math.pow(2, size);

for (let i = 0; i < totalSubsets; i++) {
    let subset = [];

    for (let j = 0; j < size; j++) {
        // Verifica se o j-ésimo bit de i está setado
        if (i & (1 << j)) {
           
            subset.push(arraySetts[j]);
        }
    }

    console.log(subset);
}
/*
------------------------------------------------
                raio x do código
------------------------------------------------
              Valores possiveis de j
j = 0 2^0 ==> (0001) && j = 1 2^1 ==> (0010)
j = 2 2^2 ==> (0100) && j = 3 2^3 ==> (1000)

se i = 0 (0000) nenhum valor entra no conjunto

se i = 1 (0001)
j(0) apenas, entra no conjunto

se i = 2 (0010)
j(1) apenas, entra no conjunto

se i = 3 (0011)
j(0) & j(1) entram no conjunto

se i = 7 (0111)
j(0) , j(1) & j(2) entram no conjunto
*/


