import { NodeStructure, LinkedList } from "./type";


class NodeForDoublyLinkedList<T> implements NodeStructure<T> {
    val: T;
    next: NodeStructure<T> | null;
    prev: NodeStructure<T> | null;

    constructor(
        val: T,
        next: NodeStructure<T> | null,
        prev: NodeStructure<T> | null
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
        this.tail = this.tail!.prev as NodeForDoublyLinkedList<T>;
        this.tail!.next = null;
        this.length--;
        return pop;
    };
    shift(){
        if (this.length === 0) {
            return undefined
        }
        const shift = this.head;
        this.head = this.head!.next as NodeForDoublyLinkedList<T>;
        if (this.length === 1) {
            this.tail = null;
        }
        this.length--;

        return shift


    };
    unshift(){};
    get(){};
    set(){};
    insert(){};
    remove(){};
    reverse(){};

}


const strDL = new DoublyLinkedList<string>();

console.log(strDL.push("111"));
console.log(strDL.push("222"));
console.log(strDL.push("333"));


