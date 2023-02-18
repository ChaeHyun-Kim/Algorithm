function solution(n, a, b) {
  let big = a - b > 0 ? a : b;
  let small = a - b > 0 ? b : a;
  var answer = 1;
  function nextnum(num) {
    if (num % 2 === 1) {
      return parseInt(num / 2) + 1;
    } else {
      return num / 2;
    }
  }
  while (
    !(big - small === 1 && parseInt(big / 2) - parseInt(small / 2) === 1)
  ) {
    big = nextnum(big);
    small = nextnum(small);
    answer += 1;
  }
  return answer;
}
console.log(solution_short(8, 4, 5));
// 둘의 차이가 1
// 나눈 몫이 1차이 나야 함

function solution_short(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer += 1;
  }
  return answer;
}
// 같은 집합에 들어가면....
