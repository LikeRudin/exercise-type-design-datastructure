import { SinglyLinkedList } from "../singly-linked-list";

describe(`SinglyLinkedList`, () => {
    let singlyLinkedList: SinglyLinkedList<number>

    beforeEach(()=>{
        singlyLinkedList = new SinglyLinkedList<number>();
    });

    test(("pushing node increasing size"), ()=>{
        singlyLinkedList.push(5);
        singlyLinkedList.push(3);
        expect(singlyLinkedList.length).toBe(2);
    });

    test("pop returns node", () => {
        singlyLinkedList.push(3);
        const popNodeValue = singlyLinkedList.pop();
        expect(popNodeValue?.val).toBe(3);
        expect(singlyLinkedList.length).toBe(0);
    });

    test("insert Node", ()=>{
        singlyLinkedList.push(3);
        singlyLinkedList.push(5);
        singlyLinkedList.push(7);
        singlyLinkedList.push(9);
        singlyLinkedList.insert(2, 6);
        const insertedValue= singlyLinkedList.get(2)
        expect(insertedValue?.val).toBe(6);
        expect(singlyLinkedList.length).toBe(5);
    });

    test("reverse", ()=>{
        singlyLinkedList.push(1);
        singlyLinkedList.push(5);
        singlyLinkedList.push(3);
        singlyLinkedList.reverse();
        const headValue = singlyLinkedList.head!.val;
        const tailValue = singlyLinkedList.tail!.val;
        expect(headValue).toBe(3);
        expect(tailValue).toBe(1);
    });

    test("remove", ()=>{
        singlyLinkedList.push(1);
        singlyLinkedList.push(5);
        singlyLinkedList.push(3);
        singlyLinkedList.remove(1);
        const headValue = singlyLinkedList.head!.val;
        const tailValue = singlyLinkedList.tail!.val;
        expect(headValue).toBe(1);
        expect(tailValue).toBe(3);
        expect(singlyLinkedList.length).toBe(2);
    });

})