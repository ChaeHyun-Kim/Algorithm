function solution_timeout(k, m, score) {
  var answer = 0;
  let repNum = score.length / m;
  score.sort((a, b) => {
    return b - a;
  });
  for (let i = 1; i <= repNum; i++) {
    answer += score.splice(0, m)[m - 1] * m;
  }
  return answer;
}

function solution(k, m, score) {
  var answer = 0;
  let arr = [];
  score.sort();
  let repNum = score.length;
  for (let i = 0; i < parseInt(repNum / m); i++) {
    for (let j = 0; j < m; j++) {
      arr.push(score.pop());
    }
    answer += arr.at(-1) * m;
    arr = [];
  }
  return answer;
}

let k = 3;
let m = 4;
let score = [1, 2, 3, 1, 2, 3, 1];
console.log(solution(k, m, score));
// 품질 1~k
//한 상자에 m개
// 가격 최저품질* 전체 개수
// 높은 것 부터 만드는게 맞나?
// 줄세워서, 자르기, 스코어 계산, 반복

// 배열 메서드의 시간 복잡도
// push, pop은 O(1)
// splice는 O(N)
// 시간 복잡도를 고려한 코드작성 중요

// at의 index 음수 : 배열의 끝에서부터 위치 계산
