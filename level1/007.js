function solution(n) {
  let arr = n.toString().split("");
  arr.reverse();
  return arr.map((data) => (data = parseInt(data)));
  // return n.toString().split('').recerse().map((data) => (data = parseInt(data)));
}

function solution_reduce(n) {
  let arr = Array.from(n.toString());
  arr.reverse();
  arr.reduce((acc, cur, i) => {
    arr[i] = parseInt(cur);
  }, 0);
  return arr;
}

// 문자열을 배열로 변경하는 방법
//  1. Array.from(n.toString());
//  2. n.toString().split("");
// map 에서 ((data) => (data = ~~))하면 실제 값이 변경됨
