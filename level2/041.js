function solution(elements) {
  var answer = [];
  let twoEle = elements.concat(elements);
  for (let i = 1; i <= elements.length; i++) {
    for (let k = 0; k < elements.length; k++) {
      let sliceEle = twoEle.slice(k, k + i);
      answer.push(sliceEle.reduce((acc, cur) => acc + cur, 0));
    }
  }
  let set = new Set(answer);
  return set.size;
}
