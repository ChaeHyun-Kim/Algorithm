// function solution_error(maps) {
//   answer = 0;
//   let m = maps.length;
//   let n = maps[0].length;
//   function getAnswer(x, y, val, list) {
//     while (y < m && x < n) {
//       if (y === m - 1 && x === n - 1) {
//         answer = answer > val ? val : answer;
//       }
//       if (x < n - 1 && list[y][x + 1] == 1) {
//         list[y][x + 1] = 0;
//         getAnswer(x + 1, y, val + 1, list);
//       }
//       if (x >= 1 && list[y][x - 1] == 1) {
//         list[y][x - 1] = 0;
//         getAnswer(x - 1, y, val + 1, list);
//       }
//       if (y < m - 1 && list[y + 1][x] == 1) {
//         list[y + 1][x] = 0;
//         getAnswer(x, y + 1, val + 1, list);
//       }
//       if (y >= 1 && list[y - 1][x] == 1) {
//         list[y - 1][x] = 0;
//         getAnswer(x, y - 1, val + 1, list);
//       }
//     }
//   }
//   getAnswer(0, 0, 0, maps);
//   return answer === 0 ? -1 : answer;
// }

function solution(maps) {
  var yLen = maps.length - 1;
  var xLen = maps[0].length - 1;

  var queue = [[0, 0]];

  var visited = Array.from(new Array(maps.length), () =>
    new Array(maps[0].length).fill(false)
  ); //false로 가득 찬 maps와 동일하게 생긴 list

  var result = 0;

  while (queue.length) {
    //queue가 0이 아닐 때까지 반복
    // 모두 방문했던 곳이면 자동으로 끝

    result++;
    var size = queue.length;
    for (var i = 0; i < size; i++) {
      var point = queue.shift(); //queue의 가장 앞에 것 꺼냄
      var curY = point[0];
      var curX = point[1];

      if (visited[curY][curX]) continue; // 방문했던 곳이면 넘어감

      maps[curY][curX] = 0; //방문할 곳 0으로 변경

      visited[curY][curX] = true; //방문했다고 표시

      if (curY === yLen && curX === xLen) return result; // 적진에 도착

      if (curY < yLen && maps[curY + 1][curX] === 1)
        //남쪽
        queue.push([curY + 1, curX]);
      if (curX < xLen && maps[curY][curX + 1] === 1)
        queue.push([curY, curX + 1]); //동쪽
      if (curY > 0 && maps[curY - 1][curX] === 1)
        // 서쪽
        queue.push([curY - 1, curX]);
      if (curX > 0 && maps[curY][curX - 1] === 1)
        //북쪽
        queue.push([curY, curX - 1]);
    }
  }

  return -1;
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

// 재귀를 통해 모든 값을 경험할 수 있게 함
