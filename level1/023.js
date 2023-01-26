function solution(genres, plays) {
  var answer = [];
  let dict = {};
  let max_dict = {};
  let idx = 0;
  genres.map((data) => {
    if (Object.keys(dict).includes(data)) {
      dict[data].push(plays[idx]);
      max_dict[data] += plays[idx];
    } else {
      dict[data] = [plays[idx]];
      max_dict[data] = plays[idx];
    }
    idx++;
  });

  return answer;
}

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));

// 장르 별 최대재생 노래 2개씩 앨범 출시
// 속한 노래가많이 재생된 장르  > 많이 재생 된 노래 > 고유번호(인덱스) 낮은 순
// 장르 1개면 하나만

//고유번호
// 장르 별 줄세우기 -> 합
// 3개 이상이면 자르기

// indexOf사용
