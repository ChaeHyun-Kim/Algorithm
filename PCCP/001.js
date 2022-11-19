function solution(input_string) {
  var answer = [];
  let lists = input_string.split("");
  let sets = new Set(lists);
  let set_to_list = Array.from(sets);
  set_to_list.map((data) => {
    let one_num = lists.filter((n) => n === data).length;
    if (lists.lastIndexOf(data) - lists.indexOf(data) + 1 != one_num) {
      answer.push(data);
    }
  });
  return answer.length ? answer.sort().join("") : "N";
}

// set 만들기 new Set();
// 인덱스 값 구하기: indexOf(), 마지막 인덱스: lastIndexOf()
// 문자 배열 정렬: sort()는 오름차순, sort().reverse()는 내림차순
// 또는 arr.sort(function (a, b) {return a - b;}); 는 오름차순
