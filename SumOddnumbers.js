function rowSumOddNumbers(n) {
	return n > 0 ? Math.pow(n, 3) : "Wrong Input";
}

console.log(rowSumOddNumbers(0));

/*
    Given the triangle of consecutive odd numbers:

                                 soma   coluna   elevado a 3
             1                    1       1       1
          3     5                 8       2       8
       7     9    11              27      3       27
   13    15    17    19           64      4       64
21    23    25    27    29        125     5      125


Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8


*/
