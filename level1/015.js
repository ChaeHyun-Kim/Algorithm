function solution(id_list, report, k) {
  var answer = [];
  let stop_user = {};
  let report_user = {};

  report.forEach((element) => {
    let split_0 = element.split(" ")[0];
    let split_1 = element.split(" ")[1];
    if (split_1 in stop_user) {
      stop_user[split_1] = stop_user[split_1] + 1;
    } else {
      stop_user[split_1] = 1;
    }
    if (split_0 in report_user) {
      report_user[split_0].push(split_1);
    } else {
      report_user[split_0] = [split_1];
    }
  });
  // let list = Object.entries(report_user);
  let list = Object.values(report_user);
  let con_list = [].concat(list);
  console.log("list", con_list);
  // list.filter((data) => {
  //   data.match;
  //   data[1];
  // });
  // k보다 큰 사람 찾기
  // 큰 사람을 한 사람이 얼마나 갖고 있는지 찾기

  return answer;
}
solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);
