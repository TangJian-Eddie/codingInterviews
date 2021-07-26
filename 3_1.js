/* 
面试题3：
题目一：找出数组中重复的数字
在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的，也不知道每个数字重复几次。
请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。 
*/

/* 排序判断 
时间复杂度 O(nlogn)
空间复杂度 O(1)
*/
function findDuplicate(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0, len = arr.length; i < len; ++i) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
  return false;
}

/* 哈希表 
时间复杂度 O(n)
空间复杂度 O(n)
*/
function findDuplicate(arr) {
  let map = new Map();
  for (let item of arr) {
    if (!map.has(item)) {
      return item;
    } else {
      map.set(item, "");
    }
  }
  return false;
}

/* 书本标答 
时间复杂度 O(n)
空间复杂度 O(1)
*/
// 如果没有重复,那么i是在数组下标i对应的元素，如果有重复，则必定有同一位置多个值
function findDuplicate(arr) {
  for (let i = 0, len = arr.length; i < len; ++i) {
    // i不是在数组下标i对应的元素
    while (arr[i] != i) {
      // 如果数组下标i对应的元素已经是i;
      if (arr[arr[i]] === arr[i]) {
        return arr[i];
      } else {
        //交换arr[i]和arr[arr[i]]的值
        let temp = arr[i];
        arr[i] = arr[temp];
        arr[temp] = temp;
      }
    }
  }
  return false;
}

console.log(findDuplicate([2, 3, 1, 0, 2, 5, 3]));
