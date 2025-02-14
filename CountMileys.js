//return the total number of smiling faces in the array
function countSmileys(arr) {
    const validSmileys = [':)', ':-)', ':~)', ';)', ';-)', ';~)', ':D', ':-D',':~D', ';D', ';-D', ';~D',];

    const numberSmiles = arr.reduce((acc, curr) => {
        if (validSmileys.some((valid) => curr === valid)) {
            acc++
        }
        return acc
    }, 0)
    return numberSmiles
}

console.log(countSmileys([':)', ':(', ':D', ':O', ':;']))   


// function countSmileys(arr) {
//     const validSmileys = [':)', ':D', ';-D', ':~)'];
//     return arr.filter(smiley => validSmileys.includes(smiley)).length;
// }




