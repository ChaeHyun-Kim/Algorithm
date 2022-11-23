function solution(number, limit, power) {
  var answer = 0;
  for (i = 1; i <= number; i++) {
    let yak = 0;

    for (j = 1; j < Math.sqrt(i); j++) {
      i % j == 0 && ++yak;
    }
    yak = yak * 2;
    if (Number.isInteger(Math.sqrt(i))) {
      yak += 1;
    }
    if (yak > limit) yak = power;
    answer += yak;
  }
  return answer;
}
//제곱수를 사용하여 시간 복잡도를 절반으로 줄임

// Number.isInteger()
// Math.sqrt() : 제곱근
