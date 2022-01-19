//10-->5-->16
//prepend: O(1)
//append: O(1)
//lookup: O(n)
//insert: O(n)
//deleteL O(n)

//avoid repeating the same code
class Node{
    constructor(value){
        this.value = value,
        this.next = null,
        this.prev = null
    }
}
class DoublyLinkedList{
    constructor(value){
        this.head ={
            value: value,
            next: null,
            prev: null,
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        //code here
        //create new node
        const newNode = new Node(value);
        newNode.prev = this.tail;
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
        this.head.prev = newNode;
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
        // figure out what is the first one is, ex: index = 2, value = 99
        const leader = this.traverseToIndex(index - 1);//find the previous position before you identify a new position , leader = 5
        //grab the next item and hold          L    F
        const follower = leader.next; // 10<-->5<-->16                                      L 1   N  F    
        leader.next = newNode;//the value you want to add a newNode is equal to 99: 10 <--> 5 -> 99  16                                                                                 
        //                                                                          L  2 1  N    F 
        newNode.prev = leader;//the previous position before 99 is leader : 10 <--> 5 <--> 99  16 
        //                                                                          L  2 1  N  3  F
        newNode.next = follower;// the later position after 99 is follower : 10 <--> 5 <--> 99 -> 16
        //                                                                                                                            L  2 1 N  4  3  F
        follower.prev = newNode;// connect the prev attribute of the follower is the newNode that you have already inserted : 10 <--> 5 <--> 99 <--> 16
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
}
const myLinkedList = new DoublyLinkedList(10); // 10
myLinkedList.append(5); //10->5
myLinkedList.append(16);//10-->5-->16
myLinkedList.prepend(1);
// myLinkedList.prepend(1); //1-->10-->5-->16
// myLinkedList.insert(2, 99);//1-->10-->99-->5-->16
// myLinkedList.printList();
// myLinkedList.remove(2);//1->10->5->16
// myLinkedList.remove(2);//1->10->16
console.log(myLinkedList.printList())