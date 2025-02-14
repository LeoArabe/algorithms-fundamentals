let string = 't,.;est;.e 12;3 :}^{`¨#$%';
//string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
string = string.replace(/[^a-z]/g, "");
console.log(string);