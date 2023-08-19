import { NodeForBinaryTree, BinaryTree } from "./type";

class NodeForBinarySearchTree<T> implements NodeForBinaryTree<T>{
    val: T;
    left: NodeForBinarySearchTree<T> | null;
    right: NodeForBinarySearchTree<T> | null;
    constructor(val:T, left=null,right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
} 

class BinarySearchTree<T> implements BinaryTree<T> {
    root: NodeForBinarySearchTree<T> | null;
    constructor(){
        this.root = null;
    }
    insert(val: T){
        try{
        const newNode = new NodeForBinarySearchTree(val);
        if (this.root === null){
            this.root = newNode;
            return this
        }

        let nodeForComparison: NodeForBinarySearchTree<T> | null = this.root;
        while (true){
            let parent;
            if (nodeForComparison!.val > newNode.val){
                parent = nodeForComparison;
                nodeForComparison = nodeForComparison!.left;
            } else if (nodeForComparison!.val < newNode.val) {
                parent = nodeForComparison;
                nodeForComparison = nodeForComparison!.right;
            } else {
                throw new Error(`some node has already this value`)
            }
            if (nodeForComparison === null){
                nodeForComparison = parent;
                break;
            }
        }

        if(nodeForComparison.val > newNode.val){
            nodeForComparison.left = newNode;
        }
        else {
            nodeForComparison.right = newNode;
        }
        return this

        } catch (e) {
            console.log(e)
            return this;
        }}
    search(){}
}


const myFirstTree = new BinarySearchTree<number>();

console.log(myFirstTree.insert(3));
console.log(myFirstTree.insert(5));
console.log(myFirstTree.insert(2));
console.log(myFirstTree);
console.log(myFirstTree.insert(3));
console.log(myFirstTree.insert(7));
