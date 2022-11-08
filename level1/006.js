function solution(n) {
  for (var i = 1; i <= n; i++) {
    if (i * i === n) {
      return (i + 1) * (i + 1);
    }
  }
  return -1;
}
// Math.sqrt(x) x의 제곱근 구하기
// Math.pow(base, exponent) base의 exponent제곱
