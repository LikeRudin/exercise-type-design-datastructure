import { NodeStructure, LinkedList } from "./type";

class NodeForDoublyLinkedList<T> implements NodeStructure<T> {
    val: T;
    next: NodeStructure<T> | null;
    prev: NodeStructure<T> | null;

    constructor(
        val: T,
        next: NodeStructure<T> | null = null,
        prev: NodeStructure<T> | null = null
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
    push(){}
    pop(){};
    shift(){};
    unshift(){};
    get(){};
    set(){};
    insert(){};
    remove(){};
    reverse(){};

}