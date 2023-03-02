function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let sum = [0, 0, 0];
  answers.map((val, idx) => {
    if (val === one[idx % one.length]) sum[0] += 1;
    if (val === two[idx % two.length]) sum[1] += 1;
    if (val === three[idx % three.length]) sum[2] += 1;
  });
  let maxs = Math.max(...sum);
  let answer = [];
  if (sum[0] === maxs) answer.push(1);
  if (sum[1] === maxs) answer.push(2);
  if (sum[2] === maxs) answer.push(3);
  return answer;
}
