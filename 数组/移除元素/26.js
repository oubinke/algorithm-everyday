/*
  给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  // unDuplicatesIdx左边（包括自己）的数都不重复
  let unDuplicatesIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[unDuplicatesIdx]) {
      unDuplicatesIdx += 1;
      // 不用担心unDuplicatesIdx溢出，因为unDuplicatesIdx永远会小于i，所以unDuplicatesIdx + 1 不会大于i
      nums[unDuplicatesIdx] = nums[i];
    }
  }
  return unDuplicatesIdx + 1;
};
