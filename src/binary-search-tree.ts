import { NodeForBinaryTree, BinaryTree } from "./type";

class BinarySearchTree<T> implements BinaryTree<T> {
    root: NodeForBinaryTree<T> | null;
    constructor(){
        this.root = null;
    }
    insert(){}
    search(){}
}
