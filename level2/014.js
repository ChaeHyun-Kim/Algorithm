function solution(n) {
  let len = (n.toString(2) + "").match(/1/gi)?.length;

  while (true) {
    n += 1;
    if (len === (n.toString(2) + "").match(/1/gi)?.length) {
      return n;
    }
  }
}

function solution_short(n, next = n + 1) {
  let nextNum = next;
  console.log(next);
  return n.toString(2).match(/1/gi)?.length ===
    nextNum.toString(2).match(/1/gi)?.length
    ? nextNum
    : solution_short(n, nextNum + 1);
}
console.log(solution_short(78));

// 인자를 할당 해주면 할당해주는 대로, 할당 안하면 계산해서 사용하나
