function solution_hash(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  return nums.length / 2 > map.size ? map.size : nums.length / 2;
}

function solution(nums) {
  let set = new Set(nums);
  return nums.length / 2 > set.size ? set.size : nums.length / 2;
}
