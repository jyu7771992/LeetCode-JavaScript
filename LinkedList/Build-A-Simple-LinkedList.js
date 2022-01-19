//10-->5-->16
//prepend: O(1)
//append: O(1)
//lookup: O(n)
//insert: O(n)
//deleteL O(n)

//avoid repeating the same code
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(value){
        this.head ={
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        //code here
        //create new node
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        //add node in the beginning
        // const newNode = {
        //     value: value,
        //     next: null
        // };
        const newNode = new Node(value);
        //create a pointer is going to point this dot head
        newNode.next = this.head;//move the original node to the next position
        //update the reference
        this.head = newNode;
        this.length++;
        return this;
    }
    //printing the list function: printing out an array
    printList(){
        const arr = [];
        let currentNode = this.head;
        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        
        return arr;
    }
    //10-->5-->99-->16
    insert(index, value){//insert this location in this value
        if(index === 0){
            this.prepend(value);
            return this.printList();
        }
        //check params
        if(index >= this.length){
            return this.append(value);
        }
        let newNode = new Node(value);
        // figure out what is the first one is
        const leader = this.traverseToIndex(index - 1);
        //grab the next item and hold
        const holdingpointer = leader.next;
        //* - *
        // \
        //  *
        leader.next = newNode;
        newNode.next = holdingpointer;
        this.length++;
        return this;
    }

    traverseToIndex(index){
        //check params
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;//keep moving the node one by one
            counter++;
        }
        console.log(currentNode);
        return currentNode;
    }
    remove(index){
        
        if(this.length === 0){
            return null;
        }
        //check the params
        const leader = this.traverseToIndex(index - 1);
        // need the reference
        //this is the situation that the index is larger than the lengh of the linkedlist
        if (leader == null){
            return this;
        }
        const deleteNode = leader.next;
        leader.next = deleteNode.next;
        this.length--;
        return this.printList();
    }
    //10-->5-->16 => 16-->10-->5
    reverse(){
        // only on item
        if(!this.head.next){
            return this.head;
        }
        let first = this.head;//10
        this.tail = this.head;//16=>10
        let second = first.next;//5
        while(second){
            const temp = second.next;//temp is going to change: 16
            second.next = first;//16=>10
            first = second;//10=>5
            second = temp;//5=>16
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}
const myLinkedList = new LinkedList(10); // 10
myLinkedList.append(5); //10->5
myLinkedList.append(16);//10-->5-->16
// myLinkedList.prepend(1); //1-->10-->5-->16
// myLinkedList.insert(2, 99);//1-->10-->99-->5-->16
// myLinkedList.printList();
// myLinkedList.remove(2);//1->10->5->16
// myLinkedList.remove(2);//1->10->16


console.log(myLinkedList.printList(), myLinkedList.reverse())