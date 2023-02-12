function solution(s) {
  if (s.match(/[0-9]/gi)?.length === s.length) {
    if (s.length === 4 || s.length === 6) {
      return true;
    }
  }
  return false;
}
console.log(solution("1234"));

// 정규식
