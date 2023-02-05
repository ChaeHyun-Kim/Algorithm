function solution(s) {
  s = s.toLowerCase();
  let idx = 0;
  let sp_list = s.split("");
  for (let i = 0; i < sp_list.length; i++) {
    if (sp_list[i] !== " ") {
      if (idx == 0) {
        sp_list[i] = sp_list[i].toUpperCase();
        idx = 1;
      }
    } else {
      idx = 0;
    }
  }
  return sp_list.join("");
}

function solution_short(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
// substring(i) : 문자열에서 i인덱스부터 끝까지 가져옴

let s = "for the last week";
console.log(solution(s));
