import { Queue } from "./queue";
import { NodeForBinarySearchTree } from "./binary-search-tree";
import { BinarySearchTree } from "./binary-search-tree";

const bfs = <T>(target: NodeForBinarySearchTree<T>) => {
  const queue = new Queue<NodeForBinarySearchTree<T>>();
  queue.enqueue(target);

  const visited: T[] = [];
  visited.push(target.val);

  while (queue.size) {
    const target = queue.dequeue();
    if (target?.val.left) {
      visited.push(target.val.left.val);
      queue.enqueue(target.val.left);
    }
    if (target?.val.right) {
      visited.push(target.val.right.val);
      queue.enqueue(target.val.right);
    }
  }
  return visited;
};

const test = () => {
  const tree = new BinarySearchTree<number>();
  tree.insert(3);
  tree.insert(1);
  tree.insert(5);
  tree.insert(4);
  tree.insert(9);
  console.log(bfs(tree.root!));
  }

test()