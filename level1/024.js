function solution(s) {
  s = s.split("");
  var answer = [];
  let dic = {};

  s.map((t, i) => {
    if (Object.keys(dic).includes(t)) {
      answer.push(Math.abs(i - dic[t]));
      dic[t] = i;
    } else {
      dic[t] = i;
      answer.push(-1);
    }
  });
  return answer;
}

//같은 글자 위치 어디? : 자신보다 앞이며, 자신과 가장 가까운
// 처음이면 -1
// 인덱스 차이 무엇인지 return

// 주어진 조건 이외의 예외를 예측하고, 테스트해야 한다
// 값의 차이라는 것은 절대값!!!
