function solution(k, tangerine) {
  let map = new Map();
  let sum = 0;
  tangerine.map((val) => {
    map.set(val, (map.get(val) || 0) + 1);
  });
  let sorting = Array.from(map.values()).sort((a, b) => {
    return b - a;
  });
  for (var i = 0; i < sorting.length; i++) {
    sum += sorting[i];
    if (sum >= k) return i + 1;
  }
}

console.log(solution(2, [1, 2, 3, 4]));
