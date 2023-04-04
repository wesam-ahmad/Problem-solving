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



