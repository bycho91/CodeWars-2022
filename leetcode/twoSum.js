// O(n) method
var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i <= nums.length - 1; i++) {
    let x = target - nums[i];
    if (hash.hasOwnProperty(x)) {
      return [hash[x], i];
    }
    hash[nums[i]] = i;
  }
  return "No values";
};

// brute force O(n^2) method
var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length - 1; i++) {
    let x = target - nums[i];
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (x === nums[j]) {
        return [i, j];
      }
    }
  }

  return "no values";
};
