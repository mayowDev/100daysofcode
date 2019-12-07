// 3 compareTriplets

function compareTriplets(a, b) {
  const score = [0, 0];

  for (let i = 0; i < 3; i++) {
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : (score[1] = score[1]);
  }

  return score;
}

console.log(compareTriplets());
