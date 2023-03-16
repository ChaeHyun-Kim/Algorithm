function solution(t, p) {
  var answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (+t.slice(i, i + p.length) <= +p) {
      answer += 1;
    }
  }
  return answer;
}
