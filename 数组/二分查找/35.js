// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    // 直接使用left+right可能会溢出
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) {
      right = mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid;
    }
  }
  // 为什么返回right?
  // 要使while循环结束，那么此时left = right, 有两种情况会使left = right
  // 1. 假设[left, right)为[0,1)，如果nums[mid] > target，即目标值小于nums[mid], 此时[left, right)为[0, 0),目标值应该插入的index为right
  // 2. 假设[left, right)为[0,1)，如果nums[mid] < target，即目标值大于nums[mid], 此时[left, right)为[1, 1),目标值应该插入的index为right
  return right;
};

var searchInsert2 = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // 直接使用left+right可能会溢出
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid;
    }
  }
  // 为什么返回right+1？
  // 要使while循环结束，那么此时left > right, 有两种情况会使left > right
  // 1. 假设[left, right]为[0,0]，如果nums[mid] > target，即目标值小于nums[mid], 此时[left, right]为[0, -1],目标值应该插入的index为right+1
  // 2. 假设[left, right]为[0,0]，如果nums[mid] < target，即目标值大于nums[mid], 此时[left, right]为[1, 0],目标值应该插入的index为right+1
  return right + 1;
};

var searchInsert3 = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let res = nums.length;
  while (left <= right) {
    // 直接使用left+right可能会溢出
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      res = mid
      right = mid - 1
    }
  }
  return res;
};