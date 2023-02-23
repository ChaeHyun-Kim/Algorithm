function solution(arr) {
  let answer = [arr[0]];
  let check = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] !== check) {
      answer.push(arr[i]);
      check = arr[i];
    }
  }
  return answer;
}
console.log(solution([4, 4, 4, 3, 3]));
