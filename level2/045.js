function solution(n) {
  // 전체 개수에서 소수가 아닌 값들을 제거해 나갈 것
  // 짝수(2의 배수)의 개수를 제거함
  var answer = n - parseInt(n / 2);

  // i = 나누어지는 값 역할
  // 3~n 까지 소수 가능여부 판별
  // i가 2씩 커짐: 짝수에 해당하는 수는 제거했기 때문 (3,5,7,9..)
  for (let i = 3; i <= n; i += 2) {
    //
    // 3~자신의 제곱근 까지의 수로 나누어지는지 확인:
    // answer를 선언 할 때 2의 배수에 해당하는 값들은 제거했기 때문
    // k또한 2씩 커짐: 2로 나누어지는 값들을 이미 제거했기 때문
    // 4로 나누어지는 값은 2로도 나누어져서 이미 제거되었기 때문!
    for (let k = 3; k <= Math.sqrt(i); k += 2) {
      if (i % k === 0) {
        answer -= 1;
        break;
      }
    }
  }
  return answer;
}
