function solution(lists) {
  let a, b;
  let n = lists.toString().split("");
  for (j = 0; j < n.length; j++) {
    for (i = 0; i < n.length; i++) {
      if (n[i] < n[i + 1]) {
        a = n[i];
        b = n[i + 1];
        n[i] = b;
        n[i + 1] = a;
      }
    }
  }
  return parseInt(n.join(""));
}

function solution2(lists) {
  return +lists.toString().split("").sort().reverse().join("");
}
console.log(["10", "19", "18", "12", "11"].sort());
// js의 sort함수는 배열 안의 원소를 정렬한다.
// ["1", "1", "18", "2", "11"]처럼 글자 크기가 다르다면 원하는 정렬을 얻을 수 없음
// sort(function (a, b) {
//   return a - b; // 오름차순
//   return b - a; // 내림차순
// });

// 배열을 합치는 함수 .join()
