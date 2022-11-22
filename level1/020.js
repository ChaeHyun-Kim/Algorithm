function solution(arr, divisor) {
  var answer = [];
  arr.map((n) => {
    n % divisor == 0 && answer.push(n);
  });
  answer.sort(function (a, b) {
    return a - b;
  });
  return answer.length ? answer : [-1];
}
