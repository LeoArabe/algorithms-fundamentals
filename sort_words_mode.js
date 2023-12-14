let input = "banana orange apple apple orange banana orange"
let newArray = [];

for (let i = 0; input[i] !== ' ' && i < input.length; i++) {
    let newWord = ''
    let newObj = {};

    while (input[i] !== ' ' && i < input.length) {
        newWord += input[i];
        i++
    }

    if (!newArray.some(obj => obj.tipo === newWord)) {
        newObj['tipo'] = newWord;
        newObj['quantidade'] = 1;
        newArray.push(newObj);

    } else {
        objFinded = newArray.find(key => key.tipo === newWord);
        objFinded.quantidade++
    }
}
newArray = newArray.sort(function (a, b) {
    if (a.quantidade === b.quantidade) {
        return a.tipo.localeCompare(b.tipo);

    } else {
        return b.quantidade - a.quantidade;
    }

});
console.log(newArray);