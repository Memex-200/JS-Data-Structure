class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  enqueue(element) {
    if (!this.isFull) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  size() {
    return this.currentLength;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Circular queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

queue.dequeue();
