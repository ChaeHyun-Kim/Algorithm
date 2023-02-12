function solution(brown, yellow) {
  for (let i = 1; i <= parseInt(yellow / 2); i++) {
    let remain = yellow / i;
    if (Number.isInteger(remain) && 2 * (i + remain) + 4 === brown) {
      return [remain + 2, i + 2];
    }
  }
  return [3, 3];
}

// yellow의 절반값 까지 (yellow의 총 개수 = 곱1 *곱2)에 맞는 모든 값 구함
// 2*(곱1+곱2)+4 = brown인 값에 [곱1+2, 곱2+2]
