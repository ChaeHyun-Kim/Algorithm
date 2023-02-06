// function solution(pr, lo) {
//   var answer = 0;
//   while (true) {
//     answer += 1;
//     if (Math.max(pr) == pr[0]) {
//       if (lo == 0) {
//         console.log("123");
//         return answer;
//       }
//       // 내가 가장 큰 것이라면
//       pr.shift();
//     } else {
//       // J가 뒤로 넘어가야되면
//       pr.push(pr.shift());
//     }
//     if (lo == 0) {
//       lo = pr.length;
//     } else {
//       lo -= 1;
//     }
//   }
// }

function solution(pr, lo) {
  var answer = 0;
  while (!(Math.max(pr) == pr[0] && lo == 0)) {
    console.log(lo);
    answer += 1;
    if (Math.max(pr) == pr[0]) {
      // 내가 가장 큰 것이라면
      pr.shift();
    } else {
      // J가 뒤로 넘어가야되면
      pr.push(pr.shift());
    }
    if (lo == 0) {
      lo = pr.length - 1;
    } else {
      lo -= 1;
    }
  }
  return answer;
}
// J꺼냄
// 높은거 있으면 J넣음, 아니면 인쇄
let pr = [2, 1, 3, 2];
let lo = 2;
console.log(solution(pr, lo));

// https://school.programmers.co.kr/learn/courses/30/lessons/42587
