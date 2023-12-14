const textArray = ['natan', 'arara', 'kaiak', 'leandro', 'palavra'];

function cleanString(text) {
    return text
        .toLowerCase()
        .replace(/[\W_]/g, "");
}

function isPalindrome(text) {
    const cleanedText = cleanString(text);
    let textInverse = ""

    for (i = text.length - 1; i >= 0; i--) {
        textInverse += text[i];
    }

    return cleanedText === textInverse;
}

textArray.forEach(element => {
    const result = isPalindrome(element) ? 'é palindromo' : 'não é palindromo';
    console.log(element + ' ' + result);
});


