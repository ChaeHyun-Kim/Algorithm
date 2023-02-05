function solution(prog, speed) {
  var answer = [];
  while (prog.length !== 0) {
    for (let j = 0; j < prog.length; j++) {
      prog[j] += speed[j];
    }
    if (prog[0] >= 100) {
      let outNum = 1;
      for (let i = 1; i < prog.length; i++) {
        if (prog[i] >= 100) {
          outNum += 1;
        } else {
          break;
        }
      }
      answer.push(outNum);
      prog = prog.slice(outNum);
      speed = speed.slice(outNum);
    } else {
      continue;
    }
  }
  return answer;
}

// 진도 100 일 때 서비스 반영
// 뒤가 먼저 개발되어도 앞 기능이 배포될 때 배포
// pr: 배포순서대로 작업의 진도가 적힌
// sp: 각 작업의 개발 속도가 적힌
// 각 배포마다 몇 개의 기능이 배포되는지

let progresses = [93, 30, 55];
let speeds = [1, 30, 5];
console.log(solution(progresses, speeds));
