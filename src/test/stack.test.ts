import { Stack } from "../stack";


describe("stack", () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack();
    });

    test(`pushing element's increase StackSize`, () => {
        stack.push(1);
        stack.push(3);
        expect(stack.size).toBe(2);
    });

    test(`popping element's decreasing StackSize`, ()=>{
        stack.push(1);
        stack.push(3);
        stack.pop();
        expect(stack.size).toBe(1);
    });

    test(`popping empty stack return null`, () => {
        expect(stack.pop()).toBeNull();
    });

    test(`pop returns top elements`, () => {
        stack.push(33);
        stack.push(55);
        const popNode = stack.pop();
        expect(popNode).toHaveProperty("val", 55)
    });
})