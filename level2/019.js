function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    if (words[i - 1].at(-1) !== words[i][0] || words.indexOf(words[i]) !== i) {
      let who = (i + 1) % n;
      let howmuch = (i + 1) / n;
      return [
        who === 0 ? n : who,
        Number.isInteger(howmuch) ? howmuch : Math.ceil(howmuch),
      ];
    }
  }
  return [0, 0];
}

// 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지
// 같은지 확인
// 아니라면 해당 인덱스
// 탈락하는 사람의 번호 : (idx+1) % n ===0? n: (idx+1) % n
//
