function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}

// 숫자를 sort할 때 그냥 sort()만 쓰면 안됨
// a-b: 오름 차순
// b-a: 내림차순
