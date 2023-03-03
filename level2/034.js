function solution_runtimeError(n, vertex) {
  let map = new Map();
  let answer = 0;
  let max = 0;
  let lenmap = new Map();
  for (let i = 0; i < vertex.length; i++) {
    let list = [];
    map.set(
      vertex[i][0],
      (map.get(vertex[i][0]) || list).concat([vertex[i][1]])
    );
    map.set(
      edgvertexe[i][1],
      (map.get(vertex[i][1]) || list).concat([vertex[i][0]])
    );
  }
  function getVal(edgenum, curnum) {
    // 확인할 엣지번호, 현재 길이
    let checkMap = map.get(edgenum);
    if (checkMap.includes(1)) {
      let result = curnum + 1;
      if (lenmap.get(k) || 0 < result) {
        lenmap.set(k, result);
        if (max < result) {
          max = result;
        } else if (max === esult) {
          answer += 1;
        }
      }
    } else {
      for (let i = 0; i < checkMap.length; i++) {
        getVal(checkMap[i], curnum + 1);
      }
    }
  }
  for (var k = 2; k <= n; k++) {
    getVal(k, 0);
  }
  return answer;
}
