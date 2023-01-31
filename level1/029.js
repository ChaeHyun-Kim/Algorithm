function solution(strings, n) {
  strings.sort();
  strings.sort(function (a, b) {
    if (a[n] > b[n]) {
      return 1; //b먼저 배치
    } else if (a[n] < b[n]) {
      return -1; //a먼저 배치
    } else if (a[n] === b[n]) {
      return 0; //순서 변경없음
    }
  });
  return strings;
}

let s = ["sun", "bed", "car"];
let n = 1;
console.log(solution(s, n));

// 문자열 배열
// 인덱스 n 기준 배열

// sort 함수는 요소를 문자열로 변경하여 정려랗ㅁ 따라서, 숫자를 배열할 때 원하는 결과가 나오지 않을 수 있음
