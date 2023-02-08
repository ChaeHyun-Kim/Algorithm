function solution(n) {
  var answer = 0;
  let sum = 0;
  let start;
  for (let i = 1; i <= n; i++) {
    sum = 0;
    start = i;
    while (sum < n) {
      sum += start;
      if (sum === n) {
        answer += 1;
        break;
      }
      start += 1;
    }
  }
  return answer;
}
