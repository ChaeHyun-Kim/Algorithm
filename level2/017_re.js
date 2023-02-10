// 아예 안되는 것을 탐지가능 ?
//

function solution(s) {
  let end = false;
  s = s.split("");
  while (true) {
    for (let i = 0; i < s.length - 1; i++) {
      console.log("1");
      if (s[i] === s[i + 1]) {
        s.splice(i, 2);
        break;
      } else {
        if (i === s.length - 2) {
          end = true;
          break;
        }
      }
    }
    return end === true ? 0 : 1;
  }
}

let s = "baabaa";
console.log(solution(s));

// 두 개씩 확인
// 맞으면 제거,break => 다시 첨음부터 반복
// 틀리면 계속
// 끝 -1 까지 갔으면 return 0
