function solution(k, dungeons) {
  let tired = [];
  const n = dungeons.length;
  let ch = Array.from({ length: n }, () => 0);

  function dfs(now, game) {
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0 && dungeons[i][0] <= now) {
        ch[i] = 1;
        dfs(now - dungeons[i][1], game + 1);
        ch[i] = 0;
      }
    }
    now >= 0 && tired.push(game);
  }
  dfs(k, 0);
  return Math.max(...tired);
}
// 현재 피로도
// 탐험전: 최소 필요 피로도
// 탐험후: 소모 피로도
// 유저가 탐험할 수 있는 최대 던전 수
