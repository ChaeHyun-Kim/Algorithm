function solution(st) {
  let s = st.split("");
  var answer = 0;
  let same = 0;
  let diff = 0;
  let start = "";

  while (s.length > 0) {
    same = 0;
    diff = 0;
    start = s[0];
    ++same;
    console.log("start", start);
    s.shift();

    while (s.length > 0) {
      if (start == s[0]) {
        console.log("같다", s[0]);
        ++same;
      } else {
        console.log("다르다", s[0]);
        ++diff;
      }
      s.shift();
      if (same == diff) {
        ++answer;
        break;
      }
    }
  }
  if (same !== diff && s.length === 0) {
    return ++answer;
  } else {
    return answer;
  }
}

//same, diff를 하나로 관리할 수 있음
function solution_short(s) {
  let answer = 0;
  let start;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      start = s[i];
      answer++;
      count = 1;
    } else {
      if (start === s[i]) {
        count++;
      } else {
        count--;
      }
    }
  }

  return answer;
}
let s = "banana";
console.log(solution_short(s));

// 규칙에 따라 여러 문자열로 분해
// 첫 글자 x
// x인 것, x가 아닌 것
// 같을 때 또는 index끝이라면 멈춤 , 읽은 문자열 분리
// 나머지 부분 반복
// 분해한 문자열 개수 return

// 잘 세워진 조건은 적은 코드실행을 가능하게 한다
