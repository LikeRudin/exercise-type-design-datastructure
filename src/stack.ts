import { NodeStructure } from "./type";

class NodeForStack<T> implements NodeStructure<T> {
    val: T;
    next: NodeStructure<T> | null;
    constructor(val:T, next:NodeStructure<T> | null =null){
        this.val = val;
        this.next =next;
    }
}

class Stack<T> {
    top: NodeForStack<T> | null;
    size: number;
    constructor(){
        this.top = null;
        this.size = 0;
    }
    push(){}
    pop(){}   

}