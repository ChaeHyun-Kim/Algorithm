function solution(record) {
  var answer = [];
  let nameDic = {};
  record.forEach((name) => {
    let [one, two, three] = name.split(" ");
    if (one === "Enter" || one === "Change") {
      nameDic[two] = three;
    }
  });
  record.forEach((name) => {
    let [one, two, three] = name.split(" ");
    if (one === "Enter") {
      answer.push(`${nameDic[two]}님이 들어왔습니다.`);
    } else if (one === "Leave") {
      answer.push(`${nameDic[two]}님이 나갔습니다.`);
    }
  });
  return answer;
}
