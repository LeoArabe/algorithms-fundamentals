const textTest = "Hello, World!";

function wordCounter(text) {
    const letterCount = {}; // Objeto para manter a contagem das letras

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        if (!letterCount[letter]) {
            letterCount[letter] = 1; // Se a letra não existir no objeto, adicione-a com contagem 1
        } else {
            letterCount[letter]++; // Se já existir, incremente a contagem
        }
    }

    for (const letter in letterCount) {
        console.log(`${letter}: ${letterCount[letter]}`); // Imprime a contagem de cada letra
    }
    return letterCount;
}

function cleanString(text) {
    return text
        .toLowerCase() // Converte o texto para minúsculas
        .replace(/[\W_]/g, ""); // Remove caracteres que não são letras
}

const textCleared = cleanString(textTest);
wordCounter(textCleared);