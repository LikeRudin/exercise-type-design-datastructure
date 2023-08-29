import { Stack } from "../stack";


describe("stack", () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack();
    });

    test(`pushing element's increase StackSize`, () => {
        stack.push(1);
        expect(stack.size).toBe(1);
    })
})