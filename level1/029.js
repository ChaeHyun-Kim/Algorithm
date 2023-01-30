function solution(strings, n) {
  strings.sort();
  strings.sort(function (a, b) {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) return 0;
  });
  return strings;
}

let s = ["sun", "bed", "car"];
let n = 1;
console.log(solution(s, n));
