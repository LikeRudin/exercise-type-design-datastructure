import { Queue } from "./queue";
import { NodeForBinarySearchTree } from "./binary-search-tree";
import { BinarySearchTree } from "./binary-search-tree";

const bfs = <T>(target: NodeForBinarySearchTree<T>) => {
    const queue = new Queue<NodeForBinarySearchTree<T>>();
    queue.enqueue(target);
    const answer:T[] = [];
    answer.push(target.val);

    while(queue.size){
        const target = queue.dequeue();
        if(target?.val.left){
            answer.push(target.val.left.val);
            queue.enqueue(target.val.left);
        }
        if (target?.val.right){
            answer.push(target.val.right.val);
            queue.enqueue(target.val.right);
        }
    }
    return answer
}


const tree = new BinarySearchTree<number>();
tree.insert(3);
tree.insert(1);
tree.insert(5);
tree.insert(4);
tree.insert(9);
console.log(bfs(tree.root!));

