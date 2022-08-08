/* 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

进阶：不要 使用任何内置的库函数，如 sqrt 。
 */

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  let left = 0;
  let right = num;
  if (num > 4) {
    right = Math.ceil(num / 2);
  }
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid < num) {
      left = mid + 1;
    } else if (mid * mid > num) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
