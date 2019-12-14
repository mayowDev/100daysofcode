/*
given five positive integers, find the minimum 
and maximum values that can be calculated by summing 
exactly four of the five integers. 

-
Complete the miniMaxSum function in the editor below.
 It should print two space-separated integers on one line:
  the minimum sum and the maximum sum of  of  elements.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Input Format

A single line of five space-separated integers.

Print two space-separated long integers denoting the 
respective minimum and maximum values that can 
be calculated by summing exactly four of the five integers.
 (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14

Hint::

-min sum = the sum of first four elemets , 
the last element is ommited/removed
-max sum= the sum of last four , the first element is ommited
-be aware to sort order the array.
-dont mutate the original array, just make copy of it
*/
let arr = [9, 3, 1, 7, 5];

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let newArr = [...arr].sort();
  let sum = 0;

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  let max = sum - newArr[0]; //newArr[0]= first element
  let min = sum - newArr[newArr.length - 1];
  // newArr.length - 1 = last element

  console.log(min, max);
  console.log(arr);
  console.log(newArr);
}

miniMaxSum(arr);
