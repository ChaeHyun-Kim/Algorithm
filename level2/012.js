let people = [70, 80, 50, 50];
let limit = 100;
console.log(solution(people, limit));

function solution(people, limit) {
  var answer = 0;
  let peo;
  people.sort((a, b) => a - b);

  function getAnswer(rider) {
    peo = [];
    let len = people.length;
    for (let i = 0; i < len; i++) {
      let newrid = people.pop();
      if (rider + newrid <= limit) {
        break;
      } else {
        peo.push(newrid);
      }
    }
    peo.reverse();
    let news = people.concat(peo);
    people = news;
    answer++;
  }
  while (people.length > 0) {
    let rider = people.pop();
    limit < people[0] + rider ? answer++ : getAnswer(rider);
  }
  return answer;
}

// console.log(solution([40, 55, 55, 60, 60, 60, 70, 80], 100)); // 7

//splice 보다 push,pop이 훨씬 빠른것으로 판단됨
// 순서대로 꺼내고 뺴고 할 때에는 push, pop을 사용

// 문제의 조건을 잘 확인해야 한다....
// 시간 효율성은 어떻게 해결하는 것이 좋을까?
//

function solution_short(people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}

console.log(solution_short([160, 150, 140, 60, 50, 40], 200)); // 3
