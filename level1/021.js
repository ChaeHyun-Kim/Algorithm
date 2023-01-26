function solution(participant, completion) {
  participant.sort();
  completion.sort(); //sort하면서 참가자랑 확인하는 방법은 ?
  for (i = 0; i < participant.length; i++) {
    if (completion[i] != participant[i]) {
      return participant[i];
    }
  }
}
solution(participant, completion);

// participant: 마라톤 선수이름 배열
// completion	: 완주한 선수들
// 완주하지 못한 선수 이름 return

// 1. 알파벳 순으로 정렬
// 2. participant와 completion 순서대로 비교해서 다르다면 해당 participant return
