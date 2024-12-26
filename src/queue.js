const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Начало очереди
    this.tail = null; // Конец очереди
  }

  // Возвращает связный список, представляющий очередь
  getUnderlyingList() {
    return this.head;
  }

  // Добавляет элемент в очередь
  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.tail) {
      // Если очередь пуста, голова и хвост указывают на новый узел
      this.head = this.tail = newNode;
    } else {
      // Присоединяем новый узел к концу очереди
      this.tail.next = newNode;
      this.tail = newNode; // Обновляем хвост
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    const dequeuedValue = this.head.value;
    this.head = this.head.next; 
    if (!this.head) {
    
      this.tail = null;
    }
    return dequeuedValue;
  }
}

module.exports = {
  Queue
};
