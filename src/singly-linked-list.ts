import {NodeStructure, LinkedList} from "./type";


class NodeForSinglyLinkedList<T> implements NodeStructure<T> {
    val: T;
    next: NodeStructure<T> | null;

    constructor(val:T, next: NodeStructure<T>| null = null){
        this.val = val;
        this.next = next;
    }
}


class SinglyLinkedList<T> implements LinkedList<T> {
    head: NodeForSinglyLinkedList<T> | null;
    tail: NodeForSinglyLinkedList<T> | null;
    length: number;
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val: T, next = null) {
        const newNode = new NodeForSinglyLinkedList(val, next);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        if (this.tail.next) {
            let newTail = newNode;
            while (newTail.next) {
                newTail = newTail.next;
                this.length++;
            }
            this.tail = newTail;
        }
        this.length++;
        return this;
    }
    pop(){
        if (this.length === 0) {
            return undefined;
        }

        let pop = this.head;
        let newTail = pop

        while(pop!.next){
            newTail = pop;
            pop = pop!.next;
        }

        newTail!.next = null;
        this.tail = newTail;
        this.length--;

        if(this.length === 0 ){
            this.tail = null;
            this.head = null;
        }
        return pop
    }

    shift(){
        if(this.length === 0) {
            return undefined;
        }
        const shift = this.head
        this.head = shift!.next;
        this.length --;
        
        if (this.length === 0){
            this.tail = null;
        }
        return shift;
    }

    unshift(val: T, next = null){
        const unshift = new NodeForSinglyLinkedList(val, next);
        
        if (this.length === 0){
        this.head = unshift;
        this.tail = unshift;
        } else {
            unshift.next = this.head;
            this.head = unshift;
        }
        this.length++;
        return this;
    }

    get(index: number) : NodeStructure<T> | null{
        if (
            index < 0 ||
            index >= this.length ||
            this.length === 0
            ) {
                return null
            };

        let get = this.head;
        for (let i = 0; i < index; i++){
            get = get!.next;
        }
        return get;
    }

    set(index:number, val: T){
        const set = this.get(index);
        if(!set) return false;

        set!.val = val;
        return true;
    }

    insert(index:number, val: T){
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === this.length){
            this.push(val);
            return true
        }
        if (index === 0){
            this.unshift(val);
            return true;
        }
        
        const prev = this.get(index - 1);
        const next = this.get(index);
        console.log(`prev:${JSON.stringify(prev)}, next: ${JSON.stringify(next)}`);
        const newNode = new NodeForSinglyLinkedList(val, next);
        
        prev!.next = newNode;
        this.length++;

        return true;
    }

    remove(index: number){
        if (index < 0 || index >= this.length){
            return undefined;
        }
        if (index === this.length -1){
            return this.pop();
        }
        if (index === 0){
            return this.shift();
        }
        const prev = this.get(index - 1);
        const remove = this.get(index);
        const next = this.get(index + 1);

        prev!.next = next;
        this.length --;
        return remove;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        

        while (node !== null) {
            let next = node.next;
            [node!.next, prev, node] = [ prev, node, next];
        }
        
        return this
    
    }

}


const stringList = new SinglyLinkedList<string>();
console.log(stringList.push("0"));
console.log(stringList);
console.log(stringList.push("1"));
console.log(stringList.get(1));
console.log(stringList.set(1, "B"));
console.log(stringList);
console.log(stringList.insert(1,"A"));
console.log(stringList);

console.log(stringList.reverse());