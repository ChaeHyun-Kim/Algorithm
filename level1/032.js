function solution(st) {
  let s = st.split("");
  var answer = 0;
  let same = 0;
  let diff = 0;
  let start = "";

  for (let i = 0; i < s.length; i++) {
    same = 0;
    diff = 0;
    start = s[0];
    s.shift();

    for (let j = 0; j < s.length; j++) {
      if (start == s[0]) {
        ++same;
      } else {
        ++diff;
      }

      s.shift();

      if (same == diff) {
        ++answer;
        break;
      }
    }
  }
  return ++answer;
}

let s = "banana";
console.log(solution(s));

// 규칙에 따라 여러 문자열로 분해
// 첫 글자 x
// x인 것, x가 아닌 것
// 같을 때 또는 index끝이라면 멈춤 , 읽은 문자열 분리
// 나머지 부분 반복
// 분해한 문자열 개수 return
