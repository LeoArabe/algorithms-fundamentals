const input = "banana orange apple apple orange banana orange";
const wordCounts = {};
const words = input.split(' ');

for (const word of words) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
    
}

const sortedWords = Object.keys(wordCounts).sort((a, b) => {
    const countDifference = wordCounts[b] - wordCounts[a];
    return countDifference === 0 ? a.localeCompare(b) : countDifference;
});

console.log(sortedWords.map(word => ({ tipo: word, quantidade: wordCounts[word] })));
