function solution(ingredient) {
  let result = ingredient.join("");
  let num = result.match(1231).length;
  console.log(result);
  console.log(num);
}
solution([2, 1, 1, 2, 3, 1, 2, 1, 2, 3, 1]);
