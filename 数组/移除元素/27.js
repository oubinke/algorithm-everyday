/* 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  // 当前下标（包含当前）的右侧全等于val
  let rightEqualValIdx = nums.length;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      rightEqualValIdx -= 1;
      const a = nums[i];
      nums[i] = nums[rightEqualValIdx];
      nums[rightEqualValIdx] = a;
    }
  }
  return rightEqualValIdx;
};

const removeElement2 = function (nums, val) {
  // 当前下标（不包含当前）的左侧全不等于val
  let leftNotEqualValIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[leftNotEqualValIdx] = nums[i];
      leftNotEqualValIdx += 1;
    }
  }
  return leftNotEqualValIdx;
};
