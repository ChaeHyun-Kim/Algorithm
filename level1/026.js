function solution(n, lost, reserve) {
  var answer = 0;
  let stu = Array(n).fill(1);
  lost.map((t) => {
    stu[t - 1] -= 1;
  });
  reserve.map((t) => {
    stu[t - 1] += 1;
  });
  stu.map((t, i) => {
    answer += 1;
    if (t == 0) {
      if (stu[i - 1] == 2) {
        t = 1;
        stu[i - 1] = 1;
      } else if (stu[i + 1] == 2) {
        t = 1;
        stu[i + 1] = 1;
      } else {
        answer -= 1;
      }
    }
  });
  return answer;
}

let n = 3;
let lost = [3];
let reserve = [1];
console.log(solution(n, lost, reserve));
// 바로 앞/뒤 번호에게만 빌려줄 수 있음
// 여벌이 있는 학생만 빌려줄 수 있음 ==> 체육복이 2개이면 빌려줄 수 있음
//
// [1,1,1,1,1,1]
