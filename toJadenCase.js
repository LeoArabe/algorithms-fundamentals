var str = "how can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  let wordsArray = this.split(' ');

  for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
  }
  return (wordsArray.join(' '))
};

console.log(str.toJadenCase())