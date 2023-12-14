function isPrime(num) {
    if (num % 2 === 0) return false; // Números pares maiores que 2 não são primos
    let sqrt = Math.sqrt(num); // Calcula a raiz quadrada do número
    for (let i = 3; i <= sqrt; i += 2) { // Verifica somente ímpares até a raiz quadrada
      if (num % i === 0) return false; // Se divisível por i, então não é primo
    }
    return true; // Se passar pelo loop, é primo
  }
  
  let limit = 2000000; // Definindo o limite como dois milhões
  let total = 2; // Começando a soma com o número 2
  
  for (let i = 3; i < limit; i += 2) { // Incrementa por 2 para verificar apenas números ímpares
    console.log(i)
    if (isPrime(i)) {
      total += i;
    }
  }
  
console.log(total); // Imprime a soma dos números primos