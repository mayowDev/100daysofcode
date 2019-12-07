// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  let sum = 0;
  for (let i = 0; i <= ar.length - 1; i++) {
    sum = sum + ar[i];
  }
  return sum;
}
