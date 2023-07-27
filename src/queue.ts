import { NodeStructure } from "./type";

class NodeForQueue<T> implements NodeStructure<T>{
    val: T;
    next: NodeForQueue<T> |null;

    constructor(val: T, next:NodeForQueue<T> |null = null ){
        this.val = val;
        this.next = next;
    }
}

class Queue<T> {
    head: NodeForQueue<T> |null;
    tail: NodeForQueue<T> |null;

    constructor(){
        this.head = null;
        this.tail = null;
    }

    enque(){}
    deque(){}

}