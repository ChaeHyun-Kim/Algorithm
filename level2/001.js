function solution(s) {
  s = s.split(" ").sort(function (a, b) {
    if (parseInt(a) - parseInt(b) > 0) {
      return 1;
    } else if (parseInt(a) - parseInt(b) < 0) {
      return -1;
    } else {
      return 0;
    }
  });
  return s[0] + " " + s.at(-1);
}

function solution_short(s) {
  s = s.split(" ");
  return Math.min.apply(null, s) + " " + Math.max.apply(null, s);
}

console.log(solution("-1 -2 -3 -4"));

// Math.max 문자열도 취급함..!
