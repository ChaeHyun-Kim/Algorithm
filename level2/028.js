function solution(n) {
  var answer = 1;
  let one = n - 2;
  let two = 1;
  let upFac;
  let downFac;
  //   let j = 0;
  while (!(one === 1 || one === 0)) {
    //   while (j < 6) {
    // j += 1;
    upFac = 1;
    downFac = 1;
    console.log("start");

    for (let i = one + two; i > one; i--) {
      upFac *= i;
      downFac *= one + two + 1 - i;
      console.log("upFac111", upFac, downFac);
    }
    one -= 2;
    two += 1;
    answer += upFac / downFac;
  }
  return answer;
}
console.log(solution(4));
// 똑같은 모양 자리 배치하기 확통
// 전체 팩토리얼 / 2의 개수 팩토리얼, 1의 개수 팩토리얼
// 전체 팩토리얼(1의 개수보다 큰 것까지) / 2의 개수 팩토리얼

// 2가 몇개인지?
// 2의 개수가 없을 때까지 반복:
//
