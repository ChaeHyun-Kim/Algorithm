function solution(m, n) {
  console.log(("*".repeat(n) + "\n").repeat(m));
}
console.log(solution(5, 3));

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
