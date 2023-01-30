function solution(num) {
  return num % 2 == 1
    ? "수박".repeat(parseInt(num / 2)) + "수"
    : "수박".repeat(parseInt(num / 2));
}
function solution_short(num) {
  return "수박".repeat(parseInt(num / 2)) + (num % 2 == 1 ? "수" : "");
}
