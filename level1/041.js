function solution(numbers) {
  return 45 - numbers.reduce((a, b) => a + b, 0);
}
let numbers = [5, 8, 4, 0, 6, 7, 9];
console.log(solution(numbers));

// reduce 함수 : reduce(전체계산값, 현재 값)
