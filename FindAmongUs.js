// O código deve encontar o 'impostor' no array, ou o único par ou o único ímpar

const arr1 = [0, 1, 2]
const arr2 = [1, 2, 3]
const arr3 = [2, 6, 8, 10, 3]
const arr4 = [0, 0, 3, 0, 0]
const arr5 = [1, 1, 0, 1, 1]

function findOutlier(integers) {
    const returnOdd = () => integers.find(int => int % 2 !== 0);
    const returnEven = () => integers.find(int => int % 2 === 0);

    if (integers[0] % 2 !== 0 && integers[1] % 2 !== 0 || integers[0] % 2 === 0 && integers[1] % 2 === 0) {
        console.log('primeiro e segundo são ímpares');
        return returnEven(); // Agora retornamos o resultado diretamente
    }
    if (integers[0] % 2 === 0 && integers[1] % 2 === 0) {
        console.log('primeiro e segundo são pares');
        return returnOdd(); // Agora retornamos o resultado diretamente
    }

    return integers[2] % 2 === 0 ? returnOdd() : returnEven();
}


console.log(findOutlier(arr1))

/*

implementação do gpt

function findOutlier(integers) {
    const returnOdd = () => integers.find(int => int % 2 !== 0);
    const returnEven = () => integers.find(int => int % 2 === 0);

    return (integers[0] % 2 !== 0 && integers[1] % 2 !== 0) || (integers[0] % 2 === 0 && integers[1] % 2 === 0)
        ? integers[0] % 2 !== 0 ? returnEven() : returnOdd()
        : integers[2] % 2 === 0 ? returnOdd() : returnEven();
}

console.log(findOutlier([1, 1, 0, 1, 1])); // Deve retornar 0

*/