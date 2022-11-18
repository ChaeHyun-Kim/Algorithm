function solution(a, b) {
  let big, small;
  if (a > b) {
    big = a;
    small = b;
  } else {
    big = b;
    small = a;
  }
  let num;
  if (big < 0) {
    num = Math.abs(small) - Math.abs(big);
  } else {
    num = big - small;
  }
  return (big + small) * ((num + 1) / 2);
}
// 아래와 같이 대소 구분을 하지 않고도 구할 수 있음
function solution2(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
