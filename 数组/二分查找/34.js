// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  // 找到nums中的第一个目标值，如果没有找到，则返回-1
  const findFirstTarget = () => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        // 1. 判断边界 2.判断是否是第一个
        // 如果不是第一个，那还需要往左边找到第一个，所以需要缩小右边界
        if (mid - 1 < 0 || nums[mid - 1] < target) {
          return mid;
        }
        right = mid - 1;
      }
    }
    return -1;
  };

  // 找到nums中的最后一个目标值，如果没有找到，则返回-1
  const findLastTarget = () => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        // 1. 判断边界 2.判断是否是最后一个
        // 如果不是最后一个，那还需要往右边找到最后一个，所以需要缩小左边界
        if ((mid + 1 > nums.length - 1) || nums[mid + 1] > target) {
          return mid;
        }
        left = mid + 1;
      }
    }
    return -1;
  };

  return [findFirstTarget(), findLastTarget()];
};

const searchRange2 = function (nums, target) {
  // 找到第一个比target小的数
  const findLeftBorder = () => {
    let left = 0;
    let right = nums.length - 1;
    let leftBorder = nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
        leftBorder = right;
      }
    }
    return leftBorder;
  };

  // 找到第一个比target大的数
  const findRightBorder = () => {
    let left = 0;
    let right = nums.length - 1;
    let rightBorder = 0;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
        rightBorder = left;
      }
    }
    return rightBorder;
  };

  const leftBorder = findLeftBorder();
  const rightBorder = findRightBorder();
  // target 在nums区间左侧或右侧
  if (leftBorder === (nums.length - 1) || rightBorder === 0) return [-1, -1];
  // target 不存在于nums范围内
  if (rightBorder - leftBorder <= 1) return [-1, -1];
  // target 存在于nums范围内
  return [leftBorder + 1, rightBorder - 1];
};
