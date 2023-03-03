function solution(n, wires) {
  const g = Array.from({ length: n }, () => []);
  for (const e of wires) {
    g[e[0] - 1].push(e[1] - 1);
    g[e[1] - 1].push(e[0] - 1);
  }
  console.log(g);
  const p = new Array(n).fill(-1);
  const q = [0];
  for (let i = 0; i < q.length; ++i) {
    const u = q[i];
    for (const v of g[u])
      if (v != p[u]) {
        p[v] = u;
        q.push(v);
      }
  }
  let ans = n;
  const dp = new Array(n).fill(1);
  for (let i = q.length; --i > 0; ) {
    const v = q[i];
    dp[p[v]] += dp[v];
    let a = Math.abs(n - 2 * dp[v]);
    if (ans > a) ans = a;
  }
  return ans;
}
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
