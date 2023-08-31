import { Queue } from "../queue";


describe("Queue", ()=> {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue();
    });

    test("enqueue", ()=> {
        queue.enqueue(3);

        expect(queue.size).toBe(1);
    });

    test("dequeue", ()=> {
        queue.enqueue(1);
        queue.enqueue(3);
        queue.enqueue(5);
        queue.dequeue();
        expect(queue.size).toBe(2);
    });

})