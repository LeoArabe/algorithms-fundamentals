// Implementação Final:

const string = 'abcdefg';

function splitIntoPairs(str) {
    str.length % 2 !== 0 && (str += '_');
    return str.match(/.{1,2}/g) || [];
}

console.log(splitIntoPairs(string))

/*
  Complete the solution so that it splits the string into pairs of two characters.
 If the string contains an odd number of characters then it should replace the missing 
 second character of the final pair with an underscore ('_').

 Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

/*

Minha primeira implementação:
/////////////////////////////////////////////

function solution(str) {
    const array = [];
    let letters = str.split('')

    for (let i = 0; i < letters.length; i = i + 2) {
        if(letters[i+1]){
            array.push(letters[i] + letters[i+1]);
        }else{
            array.push(letters[i] + '_');
        }
    }
    return array
}

*/