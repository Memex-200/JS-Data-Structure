class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new LinkedListNode(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new LinkedListNode(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Linked List is Empty");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.value} -> `;
        current = current.next;
      }
      console.log(listValues + "null");
    }
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index == 0) {
      this.prepend(value);
    } else {
      const node = new LinkedListNode(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removeNode;

    if (index == 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }

    this.size--;
    return removeNode.value;
  }
}

const list = new LinkedList();
console.log("List is Empty? ", list.isEmpty());
console.log("Size of the list is : ", list.getSize());

// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
list.append(10);
list.append(50);
list.append(90);

list.insert(15, 1);

list.removeFrom(1);
list.print();
