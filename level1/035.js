function solution(N, stages) {
  var answer = [];
  return answer;
}

// 게임 시간을 늘려서 난이도 조절
// 실패율: 도달 했지만, 클리어 못한 플레이어 수/ 스테이지에 도달한 플레이어 수
// 클리어 못한/(클리어 한 + 클리어 못한+...)
//
// 실패율 높은 스테이지부터 스테이지 번호 나열
