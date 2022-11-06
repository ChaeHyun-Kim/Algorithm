// 푸드 파이트 대회
function solution(food) {
  var num = 0;
  var answer = "";
  food.map((data) => {
    data >= 2 && (answer += num.toString().repeat(parseInt(data / 2)));
    num += 1;
  });
  var rew_answer = answer.split("").reverse().join("");
  answer = answer + "0" + rew_answer;
  return answer;
}
