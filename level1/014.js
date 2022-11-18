// function solution(ingredient) {
//   let num = 0;
//   let result = ingredient.join("");
//   while (1) {
//     let index = result.indexOf("1231");
//     if (index === -1) break;
//     else {
//       ++num;
//       result = result.replace("1231", "");
//     }
//   }
//   return num;
// }
function solution(ingredient) {
  let num = 0;
  let hamburger = [];
  ingredient.map((data) => {
    hamburger.push(data);
    let slic = hamburger.slice(-4).join("");
    if (slic == "1231") {
      hamburger.splice(hamburger.length - 4, 4);
      ++num;
    }
  });
  return num;
}
solution([1, 2, 3, 1, 2, 1]);
// console.log(solution([1, 2, 2, 3, 1]));
