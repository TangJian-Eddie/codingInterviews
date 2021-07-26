/* 面试题4: 二维数组中的查找
在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。 */
function find(matrix, num) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  if (rows > 0 && cols > 0) {
    let row = 0;
    let col = cols - 1;
    while (row < rows && col >= 0) {
      if (num < matrix[row][col]) {
        --col;
      } else if (num > matrix[row][col]) {
        ++row;
      } else {
        return true;
      }
    }
  }
  return false;
}

let matrix = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
];
console.log(find(matrix, 7));
