function solution(s) {
  s = s.split("");
  let copyS = [];
  s.forEach((val) => {
    if (val === copyS.at(-1)) {
      copyS.pop();
    } else {
      copyS.push(val);
    }
  });

  return copyS.length > 0 ? 0 : 1;
}
let s = "baabaa";
// console.log(solution(s));
s.split("").map((a) => console.log(a));
//push, pop 이용 ?!!?!!!!

// 거꾸로 놓고
// pop, 하고 마지막이랑 같으면 하나 더 팝, 아니면 얘만 푸시
// pop하고, push 하고 앞에꺼랑 같으면 둘 다 팝 -> 기존 문자열에 아무것도 없을 때 까지
// push한 리스트의 길이가 >0 이면 return 0, 아니면 1

// map 보다 forEach가 더 빠르다
