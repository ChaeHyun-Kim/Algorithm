function solution(lottos, win_nums) {
  lottos.sort((a, b) => b - a);
  win_nums.sort((a, b) => b - a);
  let zeroNum = lottos.indexOf(0) === -1 ? 0 : 6 - lottos.indexOf(0);
  let corr = 0;
  for (let i = 0; i < lottos.length - zeroNum; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        ++corr;
        break;
      }
    }
  }
  let one = 7 - corr - zeroNum;
  let two = 7 - corr;
  one > 6 && (one = 6 || (one < 1 && (one = 1)));
  two > 6 && (two = 6 || (two < 1 && (two = 1)));

  return [one, two];
}

//구매한 로또번호 lottos
// 당첨 번호를 담은 배열 win_nums
// 최고 순위와 최저 순위 배열로 return

let lottos = [0, 0, 0, 0, 0, 0];
let win_nums = [38, 19, 20, 40, 15, 25];
console.log(solution(lottos, win_nums));
