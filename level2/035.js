function solution_repeat(n) {
  let fiboArr = new Array(n);
  fiboArr[0] = 0;
  fiboArr[1] = 1;
  for (let i = 2; i <= n; i++) {
    fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
  }
  return fiboArr[n];
}

function solution_recursive(n) {
  let fiboArr = [0];
  let fiboFunc = (n) => {
    if (n < 3) {
      fiboArr[n] = 1;
    }
    if (!fiboArr[n]) {
      // 피보나치 수가 없다면 연산
      fiboArr[n] = fiboFunc(n - 1) + fiboFunc(n - 2);
    }
    return fiboArr[n];
  };
  return fiboFunc(n);
}
