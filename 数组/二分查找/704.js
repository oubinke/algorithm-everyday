const seach1 = function(num, target) {
  let left = 0;
  let right = num.length - 1;
  while (left <= right) {
    // 直接使用left+right可能会溢出
    const mid = left + Math.floor((right - left) / 2);
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

const seach2 = function(num, target) {
  let left = 0;
  let right = num.length;
  while (left < right) {
    // 直接使用left+right可能会溢出
    const mid = left + Math.floor((right - left) / 2);
    if (num[mid] > target) {
      right = mid
    } else if (num[mid] < target) {
      left = mid + 1
    } else {
      return mid;
    }
  }
  return -1;
}