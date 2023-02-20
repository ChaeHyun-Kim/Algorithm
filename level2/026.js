function solution(n) {
  let ans = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      n -= 1;
      ans += 1;
    }
    n = n / 2;
  }
  return ans;
}

console.log(solution(6));
// 앞으로/k만큼 건전지
// 현재까지 온거리*2 이동, 건전지X
// 2로 나누어서 떨어지면 또나눠, 안나눠지면 -1
// 2500, 1250, 625, 624, 312, 156, 78, 39, 38, 19, 18, 9, 8, 4, 2, 1, 0

// 1, 1, 1, 1, 1
