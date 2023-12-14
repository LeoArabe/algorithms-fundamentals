//filter: Cria um novo array com todos os elementos que passam em um teste 
//(fornecido como uma função callback).
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 1.5 === 0);
console.log(evenNumbers)

//reduce: Reduz o array a um único valor, aplicando uma função a cada elemento.
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma)

const fruits = ['esmerald','apple', 'banana', 'cherry', 'date'];
fruits.sort();
console.log(fruits);

const numbersort = [333.3, 333.1, 543, 21, 456];
numbersort.sort();
console.log(numbersort); // Saída: [1, 2, 3, 4, 5]

const numbersortinvert = [3, 1, 5, 2, 4];
numbersortinvert.sort((a, b) => b - a);
console.log(numbersortinvert); // Saída: [5, 4, 3, 2, 1]

const arrayNumbers = [1, 2, 3, 4, 5];

function customSort(arr){
    const sortedArray = [...arr];

    for(let i=0 ; i < sortedArray.length - 1 ; i++ ){
        for(let j=0 ; j < sortedArray.length -1 ; j++){

            if(sortedArray[j] < sortedArray[j+1]){
                var a = sortedArray[j];
                sortedArray[j] = sortedArray[j+1];
                sortedArray[j+1] = a;
            }
        }
    }
    return sortedArray;
}

customSort(arrayNumbers);
console.log(`se estiver em ordem decrescente deu certo ${arrayNumbers}`);

const fruitsSlice = ['apple', 'banana', 'cherry', 'date'];
const slicedFruits = fruitsSlice.slice(0, 4); // Retorna ['banana', 'cherry']
console.log(slicedFruits)


