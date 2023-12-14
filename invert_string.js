const strgn = "abcdefghijklmnopqrst";

function revertStr(str) {
    let strInverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        strInverse += str[i];
    }

    return strInverse;
}

console.log(revertStr(strgn));