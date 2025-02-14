const arr = ["zne", "aail", "thwerecta", "fertrtm", "licbe", "zcccas"];

function longestConsec(strarr, k) {
//     if (k <= 0 || k > strarr.length) return '';

//     concatArray = [];

//     for (let i = 0; i <= strarr.length - k; i++) {
//         let newWord = strarr.slice(i, k + i).join('')
//         concatArray.push({ word: newWord, length: newWord.length })
//     }
//     return concatArray.sort((a, b) => b.length - a.length)[0].word

return strarr.map((_, i) => strarr.slice(i, i + k).join(''))
.reduce((longest, current) => current.length > longest.length ? current : longest, '');

}

console.log(longestConsec(arr, 2))


// treefoling (comprimento 10) concatenação de strarr[0] e strarr[1]    k2
// folingtrashy (" 12) concatenação de strarr[1] e strarr[2]
// trashyblue (" 10) concatenação de strarr[2] e strarr[3]
// blueabcdef (" 10) concatenação de strarr[3] e strarr[4]
// abcdefuvwxyz (" 12) concatenação de strarr[4] e strarr[5]


//     treefolingtrashy (comprimento 10) concatenação de strarr[0] e strarr[1]     k3
//     folingtrashyblue (" 12) concatenação de strarr[1] e strarr[2]
//     trashyblueabcdef (" 10) concatenação de strarr[2] e strarr[3]
//     blueabcdeffuvwxyz (" 10) concatenação de strarr[3] e strarr[4]