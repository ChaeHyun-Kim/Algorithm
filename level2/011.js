function solution(array, commands) {
  var answer = [];
  let list, i, j, k;
  commands.map((t) => {
    i = t[0];
    j = t[1];
    k = t[2];

    list = array.slice(i - 1, j);
    list.sort((a, b) => a - b);
    answer.push(list[k - 1]);
  });
  return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
console.log(solution(array, commands));

// i부터 j까지 잘라서 정렬, k번째 숫자
//
