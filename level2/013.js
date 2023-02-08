function solution(n) {
  var answer = 0;
  let beforeOne = 1;
  let beforeTwo = 0;

  for (let i = 2; i <= n; i++) {
    answer = (beforeOne + beforeTwo) % 1234567;
    beforeTwo = beforeOne % 1234567;
    beforeOne = answer;
  }
  return answer;
}

// 오버플로우 고려해야 함
