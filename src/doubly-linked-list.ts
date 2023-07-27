import { NodeStructure, LinkedList } from "./type";


class NodeForDoublyLinkedList<T> implements NodeStructure<T> {
    val: T;
    next: NodeForDoublyLinkedList<T> | null;
    prev: NodeForDoublyLinkedList<T> | null;

    constructor(
        val: T,
        next: NodeForDoublyLinkedList<T> | null = null,
        prev: NodeForDoublyLinkedList<T> | null = null
        ){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList<T> implements LinkedList<T>{
    head: NodeForDoublyLinkedList<T> | null;
    tail: NodeForDoublyLinkedList<T> | null;
    length: number;
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val:T, next = null, prev = null){
        const newNode = new NodeForDoublyLinkedList(val, next, prev);
        if (this.length === 0 ) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    pop(){
        if (this.length === 0) {
            return undefined;
        }
        const pop = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
            this.length--;
            return pop;
        }
        this.tail = pop!.prev;
        this.tail!.next = null;
        this.length--;
        return pop;
    };
    shift(){
        if (this.length === 0) {
            return undefined
        }
        const shift = this.head;
        this.head = this.head!.next;
        if (this.length === 1) {
            this.tail = null;
        }
        this.head!.prev = null;
        this.length--;

        return shift


    };
    unshift(val:T, next = null, prev = null){
        const newNode = new NodeForDoublyLinkedList(val, next, null);
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next =this.head;
            this.head!.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this
        
    };
    get(index:number){
        if (index < 0 || index >= this.length) {
            return null
        }
        const halfLine = Math.floor(this.length);
        if (index < halfLine) {
            let get = this.head;
            for (let i = 0; i < index; i++ ){
                get = get!.next;
            }
            return get;

        } else {
            let get = this.tail;
            for (let i = this.length; i > index; i--) {
                get = get!.prev
            }
            return get;
        }
    };
    set(index: number, val: T){
        const set = this.get(index);
        if(!set){
            return false;
        }
        set.val = val
        return true;
    };
    insert(index: number, val:T){
        if ( index < 0 || index > this.length ) {
            return false
        }
        if (index === 0) {
            return !!this.unshift(val);
        }
        if (index === this.length) {
            return !!this.push(val);
        }
        const newNode = new NodeForDoublyLinkedList(val);
        const next = this.get(index);
        const prev = next!.prev;

        newNode.next = next;
        newNode.prev = prev;
        prev!.next = newNode;
        next!.prev = newNode;

        this.length++;
        return true;
  
    };
    remove(index: number){
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === 0 ){
            return !!this.shift();
        }
        if (index === this.length -1){
            return !!this.pop
        }
        const remove = this.get(index);
        const prev = remove!.prev;
        const next = remove!.next;
        
        prev!.next = next;
        next!.prev = prev;
        
        this.length--;
        return true;

    };
    reverse(){
        let node = this.head;
        let prevNode = null;

        while(node){
            let nextNode = node.next;
            node.next = prevNode;
            node.prev = nextNode;
            prevNode = node;
            node = nextNode;
        }
        
        this.tail = this.head
        this.head = prevNode;
        
        return this;
    };

}


const strDL = new DoublyLinkedList<string>();

console.log(strDL.push("111"));
console.log(strDL.push("222"));
console.log(strDL.push("333"));

console.log(strDL.reverse());
console.log("exit");