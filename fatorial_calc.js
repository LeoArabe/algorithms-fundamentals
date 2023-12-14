const readline = require('readline');

// Criando uma interface de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcFatorial(num) {
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

// Perguntando ao usuário
rl.question('Digite um número para calcular o seu fatorial: ', (numberInput) => {
  const number = parseInt(numberInput);

  if (isNaN(number)) {
    console.log("Por favor, digite um número válido.");
  } else {
    console.log(`O fatorial de ${number} é ${calcFatorial(number)}.`);
  }

  rl.close(); // Não esqueça de fechar a interface readline
});
