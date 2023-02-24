function solution(n, m) {
  var answer = [];
  let small = n > m ? m : n;
  let big = n > m ? n : m;
  // 최대공약수:
  for (let i = small; i > 0; i--) {
    if (big % i === 0 && small % i === 0) {
      answer[0] = i;
      break;
    }
  }

  for (let j = 1; j <= small; j++) {
    if ((big * j) % small === 0) {
      answer[1] = big * j;
      break;
    }
  }

  return answer;
}
