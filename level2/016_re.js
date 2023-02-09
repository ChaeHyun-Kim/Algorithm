function solution(s) {
  let i = 0;
  s = s.split("");
  while (s.length > 0) {
    i = 0;
    while (i < s.length - 1) {
      if (s[i] === s[i + 1]) {
        s.splice(i, 2);
        if (s.length === 0) {
          return 1;
        }
        break;
      }
      i += 1;
    }
  }
  return 0;
}

console.log(solution("baabaa"));
// 처음부터 같은지 확인, 제거
// 다시 반복(s.length>0)

// 시간초과
// https://school.programmers.co.kr/learn/courses/30/lessons/12973
