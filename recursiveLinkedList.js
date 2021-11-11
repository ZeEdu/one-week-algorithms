class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  print() {
    const output = this._print(this.head);
    console.log(output);
  }

  _print(curr) {
    if (curr === null) return "";
    return curr.val + " -> " + this._print(curr.next);
  }

  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    this._append(val, this.head);
  }

  _append(val, curr) {
    if (curr.next === null) {
      curr.next = new Node(val);
      return;
    }
    this._append(val, curr.next);
  }

  contains(target) {
    return this._contains(target, this.head);
  }

  _contains(target, curr) {
    if (curr == null) return false;
    if (curr.val === target) return true;
    return this._contains(target, curr.next);
  }
}

const list = new LinkedList();

list.append(11);
list.append(7);
list.append(10);
list.append(2);

list.print();

// const sumList = (head) => {
//   let sum = 0;
//   let curr = head;

//   while (curr !== null) {
//     sum += curr.val;
//     curr = curr.next;
//   }

//   return sum;
// };

const sumList = (head) => {
  if (head === null) {
    return 0;
  }

  return head.val + sumList(head.next);
};

console.log(sumList(list.head));
