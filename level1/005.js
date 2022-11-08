function solution_reduce(n) {
  var arr = Array.from(n.toString());
  return (answer = arr.reduce((acc, cur) => {
    return parseInt(acc) + parseInt(cur);
  }, 0));
}
// 초깃값 0 설정해주어야 안틀림
function solution_map(n) {
  var arr = Array.from(n.toString());
  var answer = 0;
  arr.map((data) => {
    answer += parseInt(data);
  });
  return answer;
}
