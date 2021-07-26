/*
面试题5：
请实现一个函数，把字符串中的每个空格替换成"%20"
例如：输入“We are happy.”，则输出“We%20are%20happy.”
*/
function replaceSpace(str) {
  return str.replace(/\s/g, "%20");
}

console.log(replaceSpace("we are happy."));
