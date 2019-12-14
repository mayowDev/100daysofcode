let ar = [3, 2, 3, 1, 3];

/*

find the frequency of the highest element in array
*/

// solution 1:  using Math.max() and  for loop
function birthdaycake(ar) {
  let tallest = Math.max(...ar);
  let frequency = 0;

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === tallest) {
      frequency += 1;
    }
  }

  return frequency;
}

// solution 2 : using filter()

function birthdaycakeTwo(ar) {
  let tallest = Math.max(...ar);

  return ar.filter(frequency => tallest === frequency).length;
}

console.log(birthdaycakeTwo(ar));
