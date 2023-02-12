function solution(numbers, target) {
  var answer = 0;
  function getAnswer(x, value) {
    if (x < numbers.length) {
      getAnswer(x + 1, value + numbers[x]); // node만들기
      getAnswer(x + 1, value - numbers[x]); //node만들기
    } else {
      if (value === target) {
        answer += 1;
      }
    }
  }
  getAnswer(0, 0); // root_node
  return answer;
}

// 재귀를 통해 모든 값을 경험할 수 있게 함
