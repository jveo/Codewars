class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }

}

class LinkedList {

    constructor(){
        this.head = null
        this.size = 0
        this.index = 0
    }

    insertFirst(value){
        this.head = new Node(value, this.head)
        this.size += 1
    }

    insertLast(value){
        let node = new Node(value)
        let curr

        if(!this.head){
            this.head = node
        } else { 
            curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size += 1
    }

    insertAtIndex(value, index){    
        if(index < 0){
            return
        }
        
        if(index > 0 && index > this.size){
            return
        }

        if(index === 0){
            this.head = new Node(value, this.head)
            return
        }

        let node = new Node(value)
        let curr
        let previous

        curr = this.head
        let count = 0
        while(count < index){
            previous = curr
            count++
            curr = curr.next
        }

        node.next = curr
        previous.next = node
    }

    getAtIndex(){

    }

    removeAtIndex(){

    }

    clear(){

    }

    printListData(){
        let currentNode = this.head
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next
        }
    }
}

const linkedlist = new LinkedList()

linkedlist.insertFirst(100)
linkedlist.insertFirst(200)
linkedlist.insertFirst(300)
linkedlist.insertLast(400)
console.log(linkedlist);

linkedlist.printListData()