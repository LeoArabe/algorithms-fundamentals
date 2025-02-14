let string = "The quick brown fox jumps over the lazy dóg t.";
let stringRandom = "texto aleatório";


//versão com some
function isPangram(string) {
    string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    string = string.replace(/[^a-z]/g, "");
    let letters = string.split('');
    let extractLetters = [];

    letters.forEach(l => {
        let there = extractLetters.some((e) => e === l);
        if (there == false) {
            extractLetters.push(l);
        }

    });
    console.log(extractLetters)

    if (extractLetters.length == 26) {
        return true;
    }
    return false;
}

console.log(isPangram(string));

//versão com indexOff
/*
function isPangram(string) {
    // Normalizar e limpar a string
    string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    string = string.replace(/[^a-z]/g, "");

    let extractLetters = [];

    for (let i = 0; i < string.length; i++) {
        if (extractLetters.indexOf(string[i]) === -1) { // Verifica se a letra já está no array
            extractLetters.push(string[i]);
        }
    }

    // Verifica se todas as 26 letras estão presentes
    return extractLetters.length === 26;
}
*/

//versão com Set
/*
function isPangram(string) {
    // Remover acentos e caracteres especiais
    string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    // Remover caracteres não alfabéticos
    string = string.replace(/[^a-z]/g, "");
    
    // Usar um Set para armazenar letras únicas
    const uniqueLetters = new Set(string);
    
    // Verificar se o tamanho do conjunto é 26 (todas as letras do alfabeto)
    return uniqueLetters.size === 26;
}

// Testes
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("texto aleatório")); // false
*/
