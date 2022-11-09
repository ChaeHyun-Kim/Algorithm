function solution(x) {
  let sum = x
    .toString()
    .split("")
    .reduce((acc, cur, i) => {
      return +acc + +cur;
    }, 0);
  console.log(sum);
  return x % sum === 0;
}
