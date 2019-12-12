/*
Task::

-you have array of integers, calculate the fractions of its 
elements that are positive, negative, and are zeros.

Hint:: 
-use for loops or anyother loop
-setup varibale that countes all of negative positive, zeros
 then appoint our loop result to the variables
 -answer must be decimal format, and fixit 6th place
 by frictioning out the length of the array 
 (i.e : 2 positive number and our array length is five 
  answer will be 2/5)

Output :: 

You must print/console the following  lines:

0.500000
0.333333
0.166667

A decimal representing of the fraction of positive numbers
in the array compared to its size.
A decimal representing of the fraction of negative numbers
in the array compared to its size.
A decimal representing of the fraction of zeros in the array 
compared to its size.
*/

let arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let len = arr.length;
  var positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < len; i++) {
    // arr[i] = value of array at this position/index
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }

  // make it decimal
  let pos = positive / len;
  let neg = negative / len;
  let zer = zero / len;
  // "\n" = crerates new line break
  console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zer.toFixed(6));
}

plusMinus(arr);
