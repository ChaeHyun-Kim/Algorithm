function solution(X, Y) {
  let short;
  let long;
  let same = [];
  if (X.length < Y.length) {
    short = X.split("");
    long = Y.split("");
  } else {
    short = Y.split("");
    long = X.split("");
  }

  while (short.length > 0) {
    let set = new Set(long);
    if (set.has(short.at(-1))) {
      long.splice(long.indexOf(short.at(-1)), 1);
      same.push(short.at(-1));
    }
    short.pop();
  }
  if (same.length === 0) {
    return "-1";
  } else if (same.length === same.join("").match(/0/gi)?.length) {
    return "0";
  } else {
    return same.sort().reverse().join("");
  }
}

function solution_short(Xx, Yy) {
  let same = [];
  let X = Xx.split("");
  let Y = Yy.split("");
  for (let i = 0; i < 10; i++) {
    let x_cnt = X.filter((t) => +t === i).length;
    let y_cnt = Y.filter((t) => +t === i).length;
    for (let j = 0; j < Math.min(x_cnt, y_cnt); j++) {
      same.push(i);
    }
  }
  if (same.length === 0) {
    return "-1";
  } else if (same.length === same.join("").match(/0/gi)?.length) {
    return "0";
  } else {
    return same.sort().reverse().join("");
  }
}

// 임의의 자리에 공통으로 나타나는 정수를 이용해 마
// 가장 큰 정수
// 존재하지 않으면 -1
// 0으로만 구성되었으면 0
// 더 짧은 것으로 돌리기 찾으면 pop
// 내림차순 줄세우기

let X = "100";
let Y = "123450";
console.log(solution(X, Y));

// 시간 복잡도의 중요성
