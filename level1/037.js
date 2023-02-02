function pushfunc(text, num) {
  return String.fromCharCode(text.charCodeAt(0) + num);
}
function solution(s, n) {
  var answer = [];
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    let val = s[i];
    if (val == " ") {
      answer.push(" ");
    } else if (val == "Z") {
      answer.push(pushfunc("A", n - 1));
    } else if (val == "z") {
      answer.push(pushfunc("a", n - 1));
    } else {
      answer.push(pushfunc(val, n));
    }
  }
  return answer.join("");
}

function solution(s, n) {
  let answer = [];
  s.split("").map((t) => {
    if (t == " ") {
      answer.push(" ");
    } else {
      if (t.toUpperCase().charCodeAt() == 90) {
        answer.push(String.fromCharCode(t.charCodeAt() + n - 26));
      } else {
        answer.push(String.fromCharCode(t.charCodeAt() + n));
      }
    }
  });
  return answer.join("");
}
//일정 거리만큼 밀어서 다른 알파벳으로 바꿈
//
// console.log(String.fromCharCode(" ".charCodeAt(0) + 1));
let s = "A B";
let n = 4;
console.log(solution(s, n));
