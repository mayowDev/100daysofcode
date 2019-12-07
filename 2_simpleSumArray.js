// 2_Simple Sum Array

let ar = [1, 2, 3, 4, 10, 11];
// answer =31

function simpleArraySum() {
  return ar.reduce((a, b) => (a += b));
}

console.log(simpleArraySum());
