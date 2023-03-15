function solution(n, k) {
  var answer = 0;
  n = n.toString(k);
  let soList = n.split("0");
  soList.forEach((val) => {
    if (val !== "" && val > 1) {
      let so = true;
      for (let i = 2; i <= Math.sqrt(val); i++) {
        if (val % i === 0) so = false;
      }
      if (so) answer += 1;
    }
  });
  return answer;
}
