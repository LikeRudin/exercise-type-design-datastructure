import { NodeForBinaryTree, BinaryTree } from "./type";

class NodeForBinarySearchTree<T> implements NodeForBinaryTree<T>{
    val: T;
    left: NodeForBinaryTree<T> | null;
    right: NodeForBinaryTree<T> | null;
    constructor(val:T, left=null,right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
} 

class BinarySearchTree<T> implements BinaryTree<T> {
    root: NodeForBinaryTree<T> | null;
    constructor(){
        this.root = null;
    }
    insert(){}
    search(){}
}
