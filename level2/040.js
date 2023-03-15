function solution(str1, str2) {
  // 대소문자 구분 안하니까 모두 대문자로 변경
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let gyoZip = 0; // 교집합 개수 저장
  let sumZip = 0; // 합집합 개수 저장

  // 각 문자열의 부분집합(key), 부분 집합의 개수(value) 저장
  let oneZip = new Map();
  let twoZip = new Map();

  // 문자열의 부분 집합 구하고
  // 문자 이외의 값이 포함되어 있지않으면 map에 추가
  for (let i = 0; i < str1.length - 1; i++) {
    // 부분 집합
    let partStr = str1[i] + str1[i + 1];

    // 문자 이외의 값이 있는지 check
    // match에서 찾으려는 값이 문자열에 없으면 null을 return ==> error
    // ?를 붙여 null이 아닌 undefined가 return 되도록 ==> !error
    if (partStr.match(/[^A-Z]/gi)?.length === undefined) {
      oneZip.set(partStr, (oneZip.get(partStr) || 0) + 1);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    let partStr = str2[i] + str2[i + 1];
    if (partStr.match(/[^A-Z]/gi)?.length === undefined) {
      twoZip.set(partStr, (twoZip.get(partStr) || 0) + 1);
    }
  }

  // str1, str2의 모든 부분집합 구함
  // set으로 변경하여 중복 없앰
  let concatSet = new Set(
    Array.from(oneZip.keys()).concat(Array.from(twoZip.keys()))
  );

  // 두 집합 모두 공집합이면 65536 return
  if (concatSet.size === 0) return 65536;

  // min, max함수를 사용하여 교집합, 합집합 개수 구함
  for (let val of concatSet) {
    let oneNum = oneZip.get(val) === undefined ? 0 : oneZip.get(val);
    let twoNum = twoZip.get(val) === undefined ? 0 : twoZip.get(val);
    gyoZip += Math.min(oneNum, twoNum);
    sumZip += Math.max(oneNum, twoNum);
  }
  // floor함수로 소수점 버림
  return Math.floor((gyoZip / sumZip) * 65536);
}
