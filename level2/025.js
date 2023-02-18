function solution(arr) {
  var answer = 1;
  let yaklist = [];
  let yakjoin = [];
  arr.forEach((num) => {
    let newnum = num;
    let yak = [];
    var icopy = 0;
    while (icopy !== 1 && newnum !== 1) {
      for (i = 2; i <= newnum; i++) {
        if (Number.isInteger(newnum / i)) {
          yak.push(i);
          icopy = i;
          newnum /= i;
          break;
        }
      }
    }
    yakjoin = yakjoin.concat(yak);
    yaklist.push(yak);
  });
  let sets = new Set(yakjoin);
  sets.forEach((nums) => {
    let max = 1;
    yaklist.forEach((list) => {
      let listnum = list.filter((element) => nums === element).length;
      max = max > listnum ? max : listnum;
    });
    answer *= nums ** max;
  });
  return answer;
}

// 일단 모든 수의 약수를 구해야 함
// 2부터 현재의 숫자(a)와 같은 값 까지 반복 -> 나누어 떨어지면 a/=i 이고, 처음부터 다시 시작
// Set으로 만든 뒤
// 각 값에 해당하는 최대 값을 찾아서 곱하고 anwer+=

// 세 개 이상의 정수의 최소공배수를 구하는 방법을 알았더라면 .. !!!!!!
// 훨씬 쉽게 풀 수 있다~!
// 원리는 간단하다! 앞에서부터 두 개씩 비교하여 최소공배수를 구해나가는 것!
// 재귀를 이용하면 쉽게 해결할 수 있다!
