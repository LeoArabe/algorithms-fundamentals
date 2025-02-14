// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the 
// sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying 
// to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]

const starTribonacci = [1, 1, 1];

function tribonacci(signature, n) {
    if (n <= 3) return signature.slice(0, n);

    let recursive = n - 3;

    while (recursive > 0) {
        let tribonacciNum = signature.at(-1) + signature.at(-2) + signature.at(-3);
        signature.push(tribonacciNum);
        recursive--
    }

    return signature;
}

console.log(tribonacci(starTribonacci, 10));

// Solução refatorada chatgpt
// function tribonacci(signature, n) {
//     if (n <= 3) return signature.slice(0, n);

//     let recursive = n - 3;

//     while (recursive > 0) {
//         let tribonacciNum = signature.at(-1) + signature.at(-2) + signature.at(-3);
//         signature.push(tribonacciNum);
//         recursive--;
//     }

//     return signature;
// }
