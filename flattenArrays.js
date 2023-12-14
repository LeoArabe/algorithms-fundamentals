// Código de implementação da função flatten (em português: 'achatar').
// Essa função busca por números em arrays aninhados.
// Quando encontra arrays dentro de outros arrays, faz uma chamada recursiva da função.

// Demonstração de uma array aninhada
const arrayNested = [2, [4, []], [[3], [1], 5], []];

// Chamada da função de achatamento
const arrayFlattened = flattenArray(arrayNested);

// Conversão dos arrays em texto para exibição no corpo do documento HTML
//let arrayNestedText = "<h2>" + arrayNested + "</h2>"; 
//let arrayFlattenedText = "<h1>" + arrayFlattened + "</h1>";

// Atualização do corpo do documento HTML com os arrays aninhados e achatados
//document.body.innerHTML = arrayNestedText + arrayFlattenedText;

// Função flattenArray que achatará o array
function flattenArray(arr) {
    flattened = []; // Armazena os números extraídos da função flatten

    function flatten(arr) {
        arr.forEach(element => {
            if (!Number.isInteger(element)) {
                // Se o elemento não for um número inteiro, faz uma chamada recursiva
                flatten(element);
            } else {
                // Se for um número inteiro, adiciona ao array flattened
                flattened.push(element);
            }   
        });
    }
    
    // Inicia o processo de achatamento
    flatten(arr);

    // Ordena os números em ordem crescente e retorna o array achatado
    return flattened.sort((a, b) => a - b);
}

console.log(arrayFlattened);


// Função que verifica se um elemento é um array
function isArray(element) {
    return Object.prototype.toString.call(element) === "[object Array]";
  }
  
  // Função que acha todos os elementos de um array e os coloca em outro array
  function flatten(array) {
    var result = []; // Array que vai guardar o resultado
    for (var i = 0; i < array.length; i++) { // Loop por todos os elementos do array
      var element = array[i]; // Elemento atual
      if (isArray(element)) { // Se o elemento for um array
        result = result.concat(flatten(element)); // Chama a função flatten recursivamente e concatena o resultado
      } else { // Se o elemento não for um array
        result.push(element); // Adiciona o elemento ao resultado
      }
    }
    return result; // Retorna o resultado
  }
  
  // Testando a função flatten com o array dado
  var array = [[],[4,[[1],[]],[[[],[],5]]],[2,[[3],0]]];
  console.log(flatten(array)); // Exibe [4, 1, 5, 2, 3, 0]
  