function solution(n) {
  var answer = [];
  n.toString(3)
    .split("")
    .map((a) => {
      answer.unshift(a);
    });
  return parseInt(answer.join(""), 3);
}

function solution_short(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
