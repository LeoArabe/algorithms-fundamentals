arraySetts = [1, 2, 3, 4];
firstArray = [];
size = arraySetts.length

console.log(firstArray)

for (let i = 0; i < size; i++) {

    for (let j = 0; j < size; j++) {
        if (i === j) {
            let arraySetta = [arraySetts[i]];
            console.log(arraySetta)
        } else if(i<j){
            let arraySett = [arraySetts[i], arraySetts[j]];
            console.log(arraySett)
        }
    }
}

console.log(arraySetts)