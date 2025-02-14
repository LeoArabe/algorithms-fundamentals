const R = 156;
const G = 0;
const B = 2;

// Nesta funçao não usei o metodo nativo js para converter decimal em hexadecimal, fiz um argoritmo que faz cálculo.
// A idéia básica do algoritimo em sí é criar uma recursão até atingir o quociente zero, enquanto não atingi
// ele acumula os restos em um array, quando o valor inicial é menos do que 16 deve ser adicionado um zero a esquerda.

function rgb(r, g, b) {
    const hexLetters = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };
    const colors = [r, g, b];

    const calcHex = (color) => {
        color = Math.max(0, Math.min(255, color));
        let hex = '';

        do {
            let rest = color % 16;
            hex = (rest > 9 ? hexLetters[rest] : rest) + hex;
            color = Math.floor(color / 16);

        } while (color > 0);
        
        return hex.length < 2 ? '0' + hex : hex;
    }

    return colors.map(calcHex).join('')
}

console.log(rgb(R, G, B));

// Descrição do desafio: The rgb function is incomplete. Complete it so that passing in RGB decimal values
// will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255.
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
//
// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"