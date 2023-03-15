function solution(msg) {
  var answer = []; // 출력 결과 저장
  let list = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let idx = 0; //msg 중 현재 입력 idx
  let lenCheck = 1; //list에 저장된 문자의 가장 긴 길이
  while (idx < msg.length) {
    let possible = false;
    for (let i = lenCheck; i > 0; i--) {
      var sliceList = msg.slice(idx, idx + i);
      let findIdx = list.indexOf(sliceList);
      if (findIdx !== -1) {
        //있다.
        answer.push(findIdx + 1);
        idx += i;
        possible = true;
        break;
      }
    }
    if (possible) {
      let total = sliceList + msg[idx];
      list.push(total);
      if (total.length > lenCheck) {
        lenCheck = total.length;
      }
    }
  }
  return answer;
}
