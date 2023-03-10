function solution(number) {
  var answer = 0;
  function getValue(people, sum, idx) {
    if (idx === number.length) {
      if (people === 3 && !sum) {
        answer += 1;
      }
    } else {
      getValue(people + 1, sum + number[idx], idx + 1);
      getValue(people, sum, idx + 1);
    }
  }
  getValue(0, 0, 0);
  return answer;
}
