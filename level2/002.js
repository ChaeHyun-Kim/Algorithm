function solution(s) {
  let cnt = 0;
  if (s[0] === ")") {
    return false;
  }
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (cnt < 0) {
      return false;
    } else {
      if (s[i] === "(") {
        cnt += 1;
      } else {
        cnt -= 1;
      }
    }
  }
  return cnt != 0 ? false : true;
}

let s = ")()(";
// console.log(solution(s));
for (let i of s) {
  console.log(i);
}

// let i of s 처럼 of를 사용하면 배열또는 문자열을 반복할 수 있음
