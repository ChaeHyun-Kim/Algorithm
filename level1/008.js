// function solution(s) {
//   return (
//     s.split("").filter((ans) => ans === "p" || ans === "P").length ===
//     s.split("").filter((ans) => ans === "y" || ans === "Y").length
//   );
// }

function solution(s) {
  console.log(s.match(/p/gi)?.length);
  return s.match(/p/gi)?.length === s.match(/y/gi)?.length;
}
console.log(solution("Pppp"));

// ?.length
//null의 length === error
//null?.length는 undefined로 error 가 아님

// match()
// 문자열.match(/찾을 단어/gi)
// gi는 대소문자 구분하지 않음을 의미함, 단어에 "" 없어도 됨
// 결과값: 찾은 단어들의 배열
