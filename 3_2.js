/* 
面试题3：
题目二：不修改数组找出重复的数字
在一个长度为n+1的数组里的所有数字都在1~n的范围内，所以数组中至少存在一个数字是重复的。
请找出数组中任意一个重复的数字，但不能修改输入的数组。
例如输入长度为8的数组{2，3，5，4，3，2，6，7}，那么对应的输出是重复的数字2或者3。 
*/

/* 辅助数组
时间复杂度 O(n)
辅助空间 O(n) */
function findDuplicate(arr) {
  //辅助数组的下标和对应的元素值是相同的
  let help = [];
  for (let i = 0; i < arr.length; i++) {
    if (help[arr[i]] === arr[i]) {
      return arr[i];
    } else {
      help[arr[i]] = arr[i];
    }
  }
  return false;
}

/* 二分查找 
时间复杂度 O(nlogn)
空间复杂度 O(1)
*/
function findDuplicate(arr) {
  let start = 1;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((end - start) / 2) + start;
    let count = getCount(arr, start, mid);
    if (start == end) {
      if (count > 1) {
        return start;
      } else {
        break;
      }
    }
    if (count > mid - start + 1) {
      //说明前半部分有重复元素
      end = mid;
    } else {
      //因为数组中肯定有重复的元素，因此存在后半部分
      start = mid + 1;
    }
  }
  return false;
}
//计算数组中start-end 中出现的次数
function getCount(arr, start, end) {
  if (arr == null) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= start && arr[i] <= end) {
      count++;
    }
  }
  return count;
}

console.log(findDuplicate([2, 3, 5, 4, 3, 2, 6, 7]));
