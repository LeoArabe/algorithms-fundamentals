let total = 0;
const num1 = 3;
const num2 = 5;
let limit = 999;

while (limit > 0) {
    if (limit % num1 === 0 || limit % num2 === 0) {
        total += limit;
    }
    limit--;
}

console.log(total);