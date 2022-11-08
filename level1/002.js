function solution_map(arr) {
  let sum = 0;
  arr.map((data) => {
    sum += data;
  });
  return sum / arr.length;
}

function solution_reduce(arr) {
  var answer = arr.reduce((acc, cur, i) => {
    return acc + cur;
  });
  return answer / arr.length;
}

// map: 배열을 1대1로 짝짓고, 기존 객체를 수정하지 않음
// reduce: acc 누적값, cur 현잿값 초깃값을 적지 않으면 인덱스 0값이 됨
// reduceRight: 거꾸로 실행,
// 배열의 길이 구하는 함수: arr.length *괄호 없음
