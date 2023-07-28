import { threadId } from "worker_threads";
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
    size: number;

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(val: T, next= null){
        const newNode = new NodeForQueue(val, next);
        if (this.size === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail!.next = newNode
        this.size++;
    }
    dequeue(){
        if (this.size === 0 ){
            return null;
        }
        const dequeueNode = this.head;
        this.head = this.head!.next;
        this.size--;
        return dequeueNode; 
        

    }

}