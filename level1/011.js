function solution_for(x, n) {
  let answer = [x];
  for (var i = 1; i < n; i++) {
    answer[i] = answer[i - 1] + x;
  }
  return answer;
}
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((data, i) => (data = data * (i + 1)));
}
