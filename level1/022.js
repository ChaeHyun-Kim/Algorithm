function solution(clothes) {
  let answer = 1;
  let dict = {};
  for (let i = 0; i < clothes.length; i++) {
    if (Object.keys(dict).includes(clothes[i][1])) {
      dict[clothes[i][1]] += 1;
    } else {
      dict[clothes[i][1]] = 2;
    }
  }
  Object.values(dict).map((data) => {
    answer *= data;
  });
  return answer - 1;
}

// 완전히 같은 옷이면 안됨
// clothes: 스파이가 가진 의상
// 조합의 수 return

//의상의 종류 별로 개수 구함
// 모든 (의상종류 +1) 곱 -1

// 의문점
// Object.keys(dict).includes(clothes[i][1])는 되고
// clothes[i][1] in Object.keys(dict)는 안되는 이유가 뭐냐
