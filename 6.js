/*
面试题6：
输入一个链表的头节点，从尾到头反过来打印出每个节点的值
*/

// 链表节点
function Node(val) {
  this.val = val;
  this.next = null;
}

// 栈
function printListReversingly(head) {
  let array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }
  return array.reverse();
}

// 递归
function printListReversingly(head) {
  if (head != null) {
    if (head.next != null) {
      printListReversingly(head.next);
    }
    console.log(head.val)
  }
}