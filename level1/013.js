function solution(n) {
  for (i = 2; i < n; i++) {
    if ((n - 1) % i == 0) return i;
  }
}

function solution2(n) {
  for (i = 0; i < n; i++) {
    if (n % i == 1) return i;
  }
}
