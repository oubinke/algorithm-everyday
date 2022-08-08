/* 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 */

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let left = 0;
  let right = x;

  // 当x>4时，x/2的平方大于x，所以right可以认为是x/2
  if (x > 4) {
    right = Math.ceil(x / 2);
  }
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return right;
};

const mySqrt2 = function (x) {
  let left = 0;
  let right = x;
  let res = x;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      res = mid;
      left = mid + 1;
    }
  }
  return res;
};
