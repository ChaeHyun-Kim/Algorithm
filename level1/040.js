function solution(s) {
  let block = 0;
  let answer = [];
  s.split("").map((t) => {
    if (t == " ") {
      block = 0;
      answer.push(" ");
    } else {
      block % 2 == 0
        ? answer.push(t.toUpperCase())
        : answer.push(t.toLowerCase());
      block++;
    }
  });
  return answer.join("");
}
console.log(solution("  tRy hello  WORLD    "));
