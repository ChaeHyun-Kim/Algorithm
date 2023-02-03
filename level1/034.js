function solution(s) {
  s = s.split("");
  s.sort(function (a, b) {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
  // 이 코드는 sort().reverse()와 동일함 !!
  return s.join("");
}

function solution_short(s) {
  return s.split("").sort().reverse().join("");
}
