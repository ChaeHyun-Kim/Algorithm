function solution(N, number) {
  // 최솟값이 8보다 크면 -1을 return 합니다.라는 제한사항이 있기에
  // 1~8까지의 경우의 수를 저장할 길이 8인 배열을 만든다.
  // 배열의 각 값에는 set을 저장한다.
  // idx +1 만큼 사용해서 연산 -> 정확한 값이 나온 최소값을 도출
  const set = new Array(8).fill().map(() => new Set());
  for (let i = 0; i < 8; i++) {
    // 각 배열에 idx+1만큼의 "N"을 저장한다. <- 0번째 idx에는 1개의 N만 사용하여 연산하기 때문
    // "N", "NN", "NNN", "NNNN", "NNNNN", ...
    set[i].add(Number(`${N}`.repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      //idx +1 만큼만 연산함
      for (const arg1 of set[j]) {
        // 만약, i가 2일 때 (j =arg1의 배열 속 set idx,i-j-1 =arg2의 배열 속 set idx) = (0, 1), (1, 0)
        // 만약, i가 3일 때 = (0, 2), (1, 1), (2, 0)
        // 만약, i가 4일 때 = (0, 3), (1, 2), (2, 1), (3, 0)
        // 만약, i가 5일 때 = (0, 4), (1, 3), (2, 2), (3, 1), (4, 0)
        // 처럼 모든 set 간 연산 -> set 내부 값들끼리 연산

        // N=5, i=3, j=0인 경우 :  arg1 = 5, arg2 = 555 (각 set의 idx 0은 "N".repeat(idx+1)이니까)
        // 아래 for문 전: { 5555 }
        // 아래 for문 후: { 5555, 560, -550, 2775, 0 }

        // N=5, i=3, j=1인 경우 :  arg1 = 5, arg2 = 60(55+5 연산으로 만들어졌던)
        // 아래 for문 전: { 5555, 560, -550, 2775, 0 }
        // 아래 for문 후: { 5555, 560, -550, 2775, 0, 65, -55, 300 }

        for (const arg2 of set[i - j - 1]) {
          set[i].add(arg1 + arg2);
          set[i].add(arg1 - arg2);
          set[i].add(arg1 * arg2);
          set[i].add(parseInt(arg1 / arg2));
        }
      }
    }
    // 모든 연산 값이 set에 저장하고, has함수로 원하는 결과값을 가졌는지 찾는다.
    // 가졌다면, N이 사용된 횟수 return
    // 각 idx +1 만큼 사용되었으니까 reuturn i + 1
    if (set[i].has(number)) {
      return i + 1;
    }
  }
  return -1;
}
