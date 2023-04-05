function last(stack){
    return stack[stack.length - 1]
}
class MinStack {
    constructor(){
        this.stack = []
        this.minStack = []
    }
push(x){
        if(this.minStack.length === 0 || x <= last(this.minStack)){
            this.minStack.push(x)
        }
        this.stack.push(x)
    }
    
    pop(){
        if(last(this.minStack) === last(this.stack)){
            this.minStack.pop()
        }
        return this.stack.pop()
    }
    
    top(){
        return last(this.stack)
    }
    
    getMin(){
        return last(this.minStack)
    }
    
    
}


let stack = new MinStack();
stack.push(23);
stack.push(15);
stack.pop();
stack.push(50);
stack.pop();
stack.push(10);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack.getMin());






// Q2

 function reverseQueue(queue) {
    const stack = [];
    while (queue.length > 0) {
      stack.push(queue.shift());
    }
    while (stack.length > 0) {
      queue.push(stack.pop());
    }
    return queue;
  }


  const queue = [1, 2, 3, 4, 5];
reverseQueue(queue);
console.log(queue); // [5, 4, 3, 2, 1]



//Q3

class Queue {
    constructor() {
      this.s1 = [];
      this.s2 = [];
    }

    enqueue(val) {
      this.s1.push(val);
    }

    dequeue() {
      if (this.s2.length === 0) {
        while (this.s1.length > 0) {
          this.s2.push(this.s1.pop());
        }
      }
      if (this.s2.length === 0) {
        return null; // or throw an error
      }
      return this.s2.pop();
    }
  }


  const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue()); // 1
console.log(q.dequeue()); // 2
console.log(q.dequeue()); // 3
console.log(q.dequeue()); // null


//proplem solving (data structure linklist )
//Q4 Create a function that takes a LinkedList and deletes the middle node in it and returns it



class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  addNode(data) {
      const new_node = new Node(data);
      if (!this.head) {
          this.head = new_node;
          this.tail = this.head;
      } else {
          this.tail.next = new_node;
          this.tail = new_node;
      }
      this.length++;
  }


  deleteMiddleNode() {
      if (this.length < 2) {
          return this.head;
      }
      const middle = Math.floor(this.length / 2);
      let prevNode = null;
      let currNode = this.head;
      for (let i = 0; i < middle; i++) {
          prevNode = currNode;
          currNode = currNode.next;
      }
      prevNode.next = currNode.next;
      this.length--;
      return this.head;
  }


}


const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);


// Before deleting middle node
console.log(linkedList);

linkedList.deleteMiddleNode();

// After deleting middle node
console.log(linkedList);







//////////////// Q2 \\\\\\\\\\\\\\\\\
// Create a function that takes a LinkedList and reverses it
class ListNode {
  constructor(data) {
      this.data = data;
      this.next = null;
  }

}

class LinkedList {
  constructor(head = null) {
      this.head = head;
  }



  reverse(node1) {
      var prev = null;
      var current = node1;
      var next = null;
      while (current != null) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
      }
      node1 = prev;
      return node1;
  }
}
let node1 = new LinkedList(1);
let node2 = new LinkedList(2);
let node3 = new LinkedList(3);

node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

console.log(list);

console.log(list.reverse(node1));










