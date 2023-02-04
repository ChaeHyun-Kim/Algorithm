function solution(s) {
  var answer = [];
  let idx = 0;
  s.split(" ").map((t, i) => {
    if (t !== " ") {
      let zeroidx = t[0].toUpperCase();
      t[0] = zeroidx;
      t[1:]
    } else {
      answer.push(t);
    }
  });
  return answer.join("");
}
let s = "for the last week";
console.log(solution(s));
