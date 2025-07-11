class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.bottom = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.next = null;
      this.length++;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
}

function reverseString(string) {
  let strArr = [];
  let reversedString = "";

  for (s of string) {
    strArr.push(s);
  }

  while (strArr.length !== 0) {
    reversedString += strArr.pop();
  }

  return reversedString;
}

// const myStack = new Stack(6);
// myStack.push(3);
// myStack.push(2);
// myStack.push(9);
// console.log(myStack);

const input1 = "Hello, World!";
const expected1 = "!dlroW ,olleH";
const result1 = reverseString(input1);
console.log(
  `Input: "${input1}" | Expected: "${expected1}" | Result: "${result1}"`
);
