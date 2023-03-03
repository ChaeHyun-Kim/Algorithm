function solution(operations) {
  var answer = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] === "I") {
      answer.push(+operations[i].split(" ")[1]);
    } else if (answer.length > 0) {
      if (operations[i] === "D 1") {
        answer.splice(answer.indexOf(Math.max(...answer)), 1);
      } else if (operations[i] === "D -1") {
        answer.splice(answer.indexOf(Math.min(...answer)), 1);
      }
    }
  }
  return answer.length === 0
    ? [0, 0]
    : [Math.max(...answer), Math.min(...answer)];
}
