function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}
// js 는 문자열의 곱셈으로 반복해서 출력할 수 없다.
// 따라서 repeat 함수를 사용하거나
// Array(11).join("*")  이런 식으로 출력
