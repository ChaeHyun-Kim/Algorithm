function solution(genres, plays) {
  let answer = [];
  let json = [];
  let hotMap = new Map();
  let genreSum = [];
  let genreSet = new Set(genres);
  for (let i = 0; i < genres.length; i++) {
    json.push({ genre: genres[i], play: plays[i], idx: i });
  }
  json.sort((a, b) => {
    if (a.play < b.play) return 1;
    if (a.play > b.play) return -1;
    return 0;
  });
  genreSet.forEach((val) => {
    let sums = 0;
    let s = [];
    json.filter(function (e) {
      if (e.genre === val) {
        sums += e.play;
        hotMap.set(val, (hotMap.get(val) || s).concat([e.idx]));
      }
    });
    genreSum.push({ genre: val, sum: sums });
  });
  genreSum.sort((a, b) => {
    if (a.sum < b.sum) return 1;
    if (a.sum > b.sum) return -1;
    return 0;
  });
  genreSum.forEach((val) => {
    let list = hotMap.get(val.genre);
    answer = answer.concat(list.length > 1 ? list.slice(0, 2) : list);
  });
  return answer;
}
