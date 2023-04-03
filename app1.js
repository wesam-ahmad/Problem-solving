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








class Queue {
    constructor() {
      this.elements = [];
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    queue_reverse() {
   
        this.elements = this.elements.reverse();
 
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }

  let queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.dequeue();
  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);
  queue.enqueue(8);
  console.log(queue.peek());
  console.log(queue.elements);

  queue.queue_reverse();
  console.log(queue.elements);
  console.log(queue.peek());



