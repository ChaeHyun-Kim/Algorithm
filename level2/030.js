function solution(priorities, location) {
  let clear = false;
  let num = 0;
  while (!clear) {
    let max = Math.max(...priorities);
    let sh = priorities.shift(); //앞에꺼 꺼냄
    if (sh === max) {
      //제일 크면, 없앰
      num += 1;
      if (location === 0) {
        clear = true;
      }
    } else {
      //제일 안크면, 다시 넣음
      priorities.push(sh);
      if (location === 0) {
        location = priorities.length;
      }
    }
    location -= 1;
  }
  return num;
}
