function solution(num) {
  var answer = 0;
  while (answer < 500) {
    if (Number.isInteger(Math.log2(num))) {
      answer += Math.log2(num);
      break;
    } else if (num % 2) {
      num = num * 3 + 1;
      ++answer;
    } else {
      num /= 2;
      ++answer;
    }
  }
  return answer >= 500 ? -1 : answer;
}
console.log(solution(626331));
