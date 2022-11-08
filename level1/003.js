function solution(n) {
  var answer = 0;
  for (var a = 0; a <= n; a++) {
    n % a === 0 && (answer += a);
  }
  return answer;
}
console.log(solution(12));
