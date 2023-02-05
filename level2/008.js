function solution(s) {
  let zeroNum = 0; //제거된 0의 개수
  let cnt = 0; //이진 변환 횟수
  while (s != "1") {
    let zero = s.match(/0/g)?.length > 0 ? s.match(/0/g)?.length : 0; // 제거할 0의 개수
    zeroNum += zero;
    s = s.length - zero;
    cnt += 1;
    if (s == "1") {
      break;
    }
    s = s * 1;
    s = s.toString(2);
  }
  return [cnt, zeroNum];
}

let s = "01110";
console.log(solution(s));
// 모든 0 제거한 길이의 값을 2진법으로 표현한 문자열
// 이진 변환 횟수, 제거된 0의 개수

//  s.match(/0/g)?.length 가 0이면 undefined 로 나옴!!!!
