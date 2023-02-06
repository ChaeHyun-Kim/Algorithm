function sorting(numbers) {
  numbers.sort((a, b) => {
    a += "";
    b += "";
    if (a.length >= b.length) {
      short = a;
      long = b;
    } else {
      short = b;
      long = a;
    }
    let long_cut = long.substr(0, short.length);
    if (short - long_cut > 0) {
      return -1;
    } else if (short - long_cut < 0) {
      return 1;
    } else if (short === long_cut) {
      if (short === long) {
        return 0;
      } else {
        let newList = sorting(newList);
      }
    }
    let list; // 어떤 리스트를 넣어야 하는지 감도안옴
    // 현재 꺼의 뒤... 전부
    // 다시 가져와 ...
    sorting(list);
    // long의 나머지보다 더 큰 것이 있는지 비교
  });
}

function no_solution(numbers) {
  let short;
  let long;
  // 첫째 자리 기준으로
  sorting(numbers);

  return numbers.join("");
}

let num = [3, 30, 34, 5, 9, 2];

function solution_short(numbers) {
  var answer = numbers
    .map((v) => v + "")
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

// 앞자리가 더 큰 것 ,
// 같으면 다음게 큰 것
console.log(solution(num));

// 정수를 이어붙여 만들 수 있는 가장 큰 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42746

// sort(a,b)
// <0 a가 앞, >0 a가 뒤, =0 이동안함
