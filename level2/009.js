function solution(citations) {
  citations.sort((a, b) => a - b);
  let h = -1;
  for (let i = citations.length - 1; i >= 0; i--) {
    if (citations.length - i >= citations[i]) {
      h = i;
      console.log(h);
      break;
    }
  }
  if (h == -1) {
    return citations.length;
  }
  return citations.length - h - 1 > citations[h]
    ? citations.length - h - 1
    : citations[h];
}

let ci = [10, 10, 10, 10, 10];
console.log("결과", solution(ci));

//생산성과 영향력 지표
// 논문 n편, h이상 인용된 논문이 h편 이상, 나머지가 h이하라면
// h의 최댓값이 h-index
