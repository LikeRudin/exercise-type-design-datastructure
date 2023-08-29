import { NodeStructure } from "./type";

export class NodeForStack<T> implements NodeStructure<T> {
    val: T;
    next: NodeStructure<T> | null;
    constructor(val:T, next:NodeStructure<T> | null =null){
        this.val = val;
        this.next =next;
    }
}

export class Stack<T> {
    top: NodeForStack<T> | null;
    bottom: NodeForStack<T>| null;
    size: number;
    constructor(){
        this.bottom = null;
        this.top = null;
        this.size = 0;
    }
    push(val: T, next=null){
        const newNode = new NodeForStack(val, next);
        if(this.size ===0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }

        this.size++;
    }
    pop(){
        if (this.size === 0){
            return null
        }
        const popNode = this.top;
        if (this.top === this.bottom){
            this.bottom = null;
        }
        this.top = this.top!.next;
        this.size--;
        return popNode;
    }   

}