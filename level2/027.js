function solution(s) {
  s = s.split("");
  let dict = { "}": "{", "]": "[", ")": "(" };
  var answer = 0;
  let nowturn = 0;

  while (nowturn < s.length) {
    console.log(s);
    let check = [];
    let num = s.length - 1;
    while (num >= 0) {
      if (s[num] === dict[s[num - 1]]) {
        console.log(s[num]);
        num -= 2;
      } else if (s[num] === dict[check.at(-1)]) {
        console.log("else", s[num]);
        check.pop();
        num -= 1;
      } else {
        check.push(s[num]);
        console.log("check", check);
        num -= 1;
      }
    }
    console.log("num", num, check.length);
    if (num === -1 && check.length === 0) {
      answer += 1;
    }
    s.unshift(s.pop());
    nowturn += 1;
  }

  return answer;
}
