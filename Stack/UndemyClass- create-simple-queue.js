//Simple Queue
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;//peek this first item in the queue
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){//first in first out
        if(!this.first){
            return null;
        }
        if(this.first === this.last){// this avoids reducing items until this.length is zero
            this.last = null;
        }
        this.first = this.first.next; 
        this.length--;
        return this;
    }
}
const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Merry');
myQueue.enqueue('Jason');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();



