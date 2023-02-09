function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

function solution_short(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
let a = [1, 2, 3, 4];
let b = [-3, -1, 0, 2];

console.log(solution_short(a, b));
