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

const testArr = [1, 3, 2, 8, 4, 10, 33, 12];

console.log(twoSum(testArr, 13));
