function solution_parse(s) {
  //   return parseInt(s);
  return Number(s);
}
function solution(s) {
  // 동적언어의 특성을 활용
  //   return s/1;
  //   return s*1;
  return +s;
}
// js는 동적언어 => 자료형이 런타임에 결정됨, 자료형을 지정하지 않음
// 문자열에 *1 또는 /1을 하면 숫자로 변환됨
// +문자열도 동일
