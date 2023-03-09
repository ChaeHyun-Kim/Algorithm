function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    let val = parseInt(n / a) * b;
    let remain = n % a;
    answer += val;
    n = val + remain;
  }
  return answer;
}

// n을 a로 나눈 몫: *b +=answer
// n =  몫: *b +나머지
// 전체가 a보다 클동안 반복
