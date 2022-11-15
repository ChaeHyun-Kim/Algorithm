function solution(ingredient) {
  let num = 0;
  let result = ingredient.join("");
  // while (1) {
  let index = result.indexOf("1231");
  console.log(index);
  // if (index === -1) break;
  // else {
  ++num;
  result = result.substr(index, index + 4);
  return num;
}
// }
// }
console.log(solution([1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1]));
