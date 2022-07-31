const seach = function(num, target) {
  let left = 0;
  let right = num.length - 1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (num[mid] > target) {
      right = mid - 1
    } else if (num[mid] < target) {
      left = mid + 1
    } else {
      return mid;
    }
  }
  return -1;
}