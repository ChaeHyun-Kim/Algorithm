function solution(d, budget) {
  let sum = 0;
  d.sort((a, b) => {
    return a - b;
  });
  for (var i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum > budget) {
      return i;
    }
  }
  return i;
}
