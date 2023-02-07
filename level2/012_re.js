function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  let people_copy;
  let poss;
  let comp;

  while (people.length > 0) {
    poss = false;
    comp = people[0]; //비교 주체
    people_copy = people.slice(1); // 비교주체 제거한 리스트50,70,80
    for (let j = 0; j < people_copy.length; j++) {
      if (comp + people_copy[people_copy.length - j - 1] <= limit) {
        answer += j + 1;
        people = people_copy.slice(0, people_copy.length - j - 1); //현재 인덱스 부터 뒤 다 자름
        poss = true;
        break;
      } else {
        continue;
      }
    }
    if (!poss) {
      answer += people_copy.length + 1;
      return answer;
    }
  }

  return answer;
}
// 한 번에 2명씩
//제한 무게
//

let people = [70, 80, 50, 50];
let limit = 100;
console.log(solution(people, limit));

// https://school.programmers.co.kr/learn/courses/30/lessons/42885
