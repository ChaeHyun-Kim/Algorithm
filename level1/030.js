function solution(k, score) {
  var answer = [];
  let score_dup = [];

  for (let n = 0; n < score.length; n++) {
    score_dup.push(score[n]);
    score_dup.sort(function (a, b) {
      return b - a;
    });
    answer.push(score_dup.length < k ? score_dup.at(-1) : score_dup[k - 1]);
  }

  return answer;
}

let k = 3;
let score = [10, 100, 20, 150, 1, 100, 200];
console.log("답", solution(k, score));

//k번째 이내이면 내가 올라가고 있던 사람
// 매일 하나 씩 push 해서 k번째 점수 return
