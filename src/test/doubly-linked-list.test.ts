import { DoublyLinkedList } from "../doubly-linked-list";

describe("doubly linked List",()=>{
    let doublyLinkedList: DoublyLinkedList<number>;
    
    beforeEach(()=> {
        doublyLinkedList = new DoublyLinkedList();
    });

    test("pop", () => {
        doublyLinkedList.push(3);
        const popNode = doublyLinkedList.pop();
        expect(popNode?.val).toBe(3);
        expect(doublyLinkedList.length).toBe(0);
    });

    test("push", () => {
        doublyLinkedList.push(5);
        expect(doublyLinkedList.length).toBe(1);
    });

    test("insert Node", ()=> {
        doublyLinkedList.push(5);
        doublyLinkedList.push(3);
        doublyLinkedList.insert(1,1);
        const secondeNode = doublyLinkedList.get(1);
        expect(doublyLinkedList.length).toBe(3);
        expect(secondeNode?.val).toBe(1);
    });

    test("remove Node", () => {
        doublyLinkedList.push(5);
        doublyLinkedList.push(3);
        doublyLinkedList.push(8);
        doublyLinkedList.push(4);
        doublyLinkedList.remove(1);
        expect(doublyLinkedList.length).toBe(3);
        const secondNode = doublyLinkedList.get(1);
        expect(secondNode!.val).toBe(8);
    });

    test("set Node value", ()=>{
        doublyLinkedList.push(5);
        doublyLinkedList.push(3);
        doublyLinkedList.set(1,4);
        const secondNode = doublyLinkedList.tail;
        expect(secondNode?.val).toBe(4);
        expect(doublyLinkedList.length).toBe(2);
    });

    test("shift",()=>{
        doublyLinkedList.push(5);
        const shiftNode = doublyLinkedList.shift();
        expect(shiftNode?.val).toBe(5); 
    });

    test("unshift",()=>{
        doublyLinkedList.push(5);
        doublyLinkedList.push(3);
        doublyLinkedList.unshift(2);
        const headNode = doublyLinkedList.head;
        expect(headNode!.val).toBe(2);
    });

});