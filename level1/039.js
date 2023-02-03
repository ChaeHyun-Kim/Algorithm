function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((num, i) => {
    if (signs[i]) {
      answer += num;
    } else {
      answer -= num;
    }
  });
  return answer;
}

console.log(solution([4, 7]));
