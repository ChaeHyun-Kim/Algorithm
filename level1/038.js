function solution(arr) {
  arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
  return arr;
}

console.log(solution([4, 3, 2, 1]));

//apply에 전달한 배열 요소 중 최소값
// apply없으면 배열말고, 직접 요소 넣어야 함
