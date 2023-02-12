function solution(price, money, count) {
  let total = ((count * (count + 1)) / 2) * price - money;
  return total > 0 ? total : 0;
}

console.log(solution(3, 20, 4));
