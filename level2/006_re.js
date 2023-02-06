function solution(str1, str2) {
  let spec_str = /[^A-Z]/g;
  str2 = str2.toUpperCase();
  str1 = str1.toUpperCase();
  let oneZip = [];
  let twoZip = [];
  let gyoZip = 0;
  // 각 집합 갯수

  for (let i = 0; i < str1.length - 1; i++) {
    console.log(spec_str.test(1));

    if (spec_str.test(str1[i]) || spec_str.test(str1[i + 1])) {
      continue;
    } else {
      oneZip.push(str1[i] + str1[i + 1]);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (spec_str.test(str2[i]) || spec_str.test(str2[i + 1])) {
      continue;
    } else {
      twoZip.push(str2[i] + str2[i + 1]);
    }
  }
  for (let i = 0; i < oneZip.length; i++) {
    if (twoZip.includes(oneZip[i])) {
      // min max 걔싼

      gyoZip += 1;
    } else {
      continue;
    }
  }
  console.log(oneZip);
  console.log(twoZip);
  console.log(gyoZip);
  if (oneZip.length === 0 && twoZip.length === 0) {
    return 65536;
  } else {
    // 교집합 계산
    return parseInt(
      (gyoZip / (oneZip.length + twoZip.length - gyoZip)) * 65536
    );
  }
}
// 대문자로 변경
// 두 글자씩 끊어
// 공백,  숫자,  특수문자 있으면 버림

// parseInt(결과*65536)

let str1 = "aa1+aa2";
let str2 = "AAAA12";

console.log(solution(str1, str2));

// 앞에 예외사항이 오는 것을 판별 못함
//

// https://school.programmers.co.kr/learn/courses/30/lessons/17677
