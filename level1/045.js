function solution(a, b) {
  let day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let sumMonth = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
  return day[(b - 1 + sumMonth[a - 1]) % 7];
}

function getDayName(a, b) {
  var tempDate = new Date(2016, a - 1, b);
  // tempDate.toString()을 하면
  // Tue Feb 02 2016 00:00:00 GMT+0900 (대한민국 표준시) 형식으로 나옴
  return tempDate.toString().slice(0, 3).toUpperCase();
}
