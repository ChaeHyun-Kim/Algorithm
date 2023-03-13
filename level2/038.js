function solution(cacheSize, cities) {
  var answer = 0;
  let cityList = [];
  if (cacheSize === 0) {
    return cities.length * 5;
  } // 캐시크기가 0인 경우를 예외로 처리
  cities.map((val) => {
    val = val.toUpperCase();
    let checkIdx = cityList.indexOf(val);
    // cityList에 val값이 없다면 -1을 반환함
    if (checkIdx != -1) {
      //cityList에 해당 도시명이 존재하면
      cityList.splice(checkIdx, 1); //해당 도시명을 제거
      cityList[cityList.length] = val; //마지막 위치에 추가
      answer += 1;
    } else {
      if (cityList.length === cacheSize) {
        // 캐시가 꽉찼으면
        cityList.shift(); //가장 오래된 값 제거
      }
      cityList.push(val);
      answer += 5;
    }
  });
  return answer;
}
