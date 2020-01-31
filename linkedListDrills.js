class Node {
  constructor(data, next = null) {
      this.data = data;
      this.next = next;
  }

}

class LinkedList {
  constructor() {
      this.head = null;
      this.size = 0;
  }

  insertFirst(data) {
      this.head = new Node(data, this.head);
      this.size++;
  }

  insertLast(data) {
      if (!this.head) {
          this.insertFirst(data);
      } else {
          let position = this.head;
          while (position.next) {
              position = position.next;
          }
          position.next = new Node(data)
          this.size++;
      }
  }

  remove(data) {
      if (!this.head) {
          console.log('There is nothing in this list. Get your -ish together. Thank you :)')
          return;
      }
      if (this.head.data === data) {
          this.head = this.head.next;
          this.size--;
          return;
      }

      let current = this.head;
      let previous;
      while (current && current.data !== data) {
          previous = current;
          current = current.next;
      }
      if (current === null) {
          console.log('Data not Found to Remove');
          return;
      }
      previous.next = current.next;
      this.size--;
  }
  find(data) {
      if (!this.head) {
          console.log('There is nothing in this list. Get your -ish together. Thank you :)')
          return;
      }
      if (this.head.data === data) {
          console.log(this.head)
          return this.head;
      }

      let current = this.head;
      while (current && current.data !== data) {
          current = current.next;
      }
      if (current === null) {
          console.log('Data not Found');
          return;
      }
      console.log(current);
      return current;
  }

  insertBefore(data, key) {
      if (!this.head) {
          console.log('There is nothing in this list. Get your -ish together. Thank you :)')
          return;
      }
      if (this.head.data === key) {
          this.insertFirst(data)
          return
      }

      let current, previous
      const newNode = new Node(data)
      current = this.head
      while (current && current.data !== key) {
          previous = current
          current = current.next
      }

      if (current === null) {
          console.log('You suck. This doesn\'t exist')
          return
      }

      previous.next = newNode
      newNode.next = current
      this.size++
  }

  insertAfter(data, key) {
      if (!this.head) {
          console.log('There is nothing in this list. Get your -ish together. Thank you :)')
          return;
      }
      if (this.head.data === key) {
          this.insertFirst(data)
          return
      }
      let current

      const newNode = new Node(data)

      current = this.head
      while (current && current.data !== key) {
          current = current.next
      }

      if (current === null) {
          console.log('You suck. This doesn\'t exist')
          return
      }

      newNode.next = current.next
      current.next = newNode
      this.size++
  }

  insertAt(data, idx) {
      if (!this.head) {
          console.log('There is nothing in this list. Get your -ish together. Thank you :)')
          return;
      }
      if (idx > 0 && idx > this.size) {
          console.log('idx given is out of range')
          return
      }

      if (idx === 0) {
          this.insertFirst(data)
          return
      }

      let current, previous
      const newNode = new Node(data)
      current = this.head
      let count = 0

      while (count < idx) {
          previous = current
          current = current.next
          count++
      }

      previous.next = newNode
      newNode.next = current
      this.size++
  }

}

// const myLinkedList = new LinkedList();
// myLinkedList.remove(50);
// myLinkedList.insertLast(50);
// myLinkedList.remove(50);
// myLinkedList.insertFirst(30);
// myLinkedList.insertLast(70);
// myLinkedList.find(10);
// myLinkedList.remove(70);
// myLinkedList.remove(20);

const SLL = new LinkedList()

const main = () => {
  SLL.insertLast('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Tauhida')
  SLL.remove('Husker')
  SLL.insertBefore('Athena', 'Apollo')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('Kat', 3)
  SLL.remove('Tauhida')
}

const display = (list) => {
  if (!list.head) {
      return null;
  }

  let current = list.head

  while (current) {
      console.log(current.data)
      current = current.next
  }
}

const listSize = (list) => {
  if (!list.head) {
      return;
  }

  let current = list.head
  let count = 0

  while (current) {
      count++
      current = current.next
  }

  console.log(count)
}

const isEmpty = (list) => {
  return !list.head ? true : false
}

main()
display(SLL)
listSize(SLL)
console.log(isEmpty(SLL))