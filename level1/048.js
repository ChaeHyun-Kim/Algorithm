function solution(arr1, arr2) {
  let answer = Array.from(new Array(arr1.length), () =>
    new Array(arr1[0].length).fill(0)
  );
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return answer;
}
let arr1 = [[1], [2]];
let arr2 = [[3], [4]];
console.log(solution(arr1, arr2));
