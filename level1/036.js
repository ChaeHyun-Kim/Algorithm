function solution(left, right) {
  var answer = 0;
  if (right === 1) {
    return 1;
  } else if (left === 1) {
    left = 2;
    answer = -1;
  }
  for (let i = left; i <= right; i++) {
    let yak = 0;
    for (let j = 2; j < i; j++) {
      if (!(i % j)) {
        ++yak;
      }
    }
    if (!(yak % 2)) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

function solution_short(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
let l = 13;
let r = 17;

//  제곱근이 정수이면 약수는 홀수개, 아니면 짝수개
