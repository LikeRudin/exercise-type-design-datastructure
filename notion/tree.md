
Objective

1. Define: what a tree is

2. Compare and contrast: trees and lists

3. Explain: the differences between trees, binary trees, and binary search trees

4. Implement operations: on binary search trees

# 1. What is a tree?

A data structure that consists of nodes in a parent / child relationship
👩‍👦


### TREE TERMINOLOGY

1. Root - The top node in a tree.

2. Child -A node directly connected to another node when moving away from the Root.

3. Parent - The converse notion of a child.

4. Siblings -A group of nodes with the same parent.

5. Leaf - A node with no children.

6. Edge - The connection between one node and another.

# 2. Compare and contrast


|tree|list|
|--|--|
|non-linear|linear|



# 3. Kinds of Tree

Trees

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operating Systems
- Computer file system

Binary Trees

- Decision Trees (true / false)
- Database Indicies
- Sorting Algorithms

Binary Search Trees

```
Every parent node has at most two children
Every node to the left of a parent node is always less than the parent
Every node to the right of a parent node is always greater than the parent
```


# 4. Implements

## Node structure for BinarySearchTree

```ts
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}
```

## methods

### Insert

```
Steps - Iteratively or Recursively

- Create a new node
- Starting at the root
    - Check if there is a root, if not - the root now becomes that new node!
    
    -If there is a root, check if the value of the new node is greater than or less than the value of the root
    - If it is greater 
        - Check to see if there is a node to the right
        - If there is, move to that node and repeat these steps
        - If there is not, add that node as the right property
- If it is less
    - Check to see if there is a node to the left
        - If there is, move to that node and repeat these steps
        - If there is not, add that node as the left property
```
### Search

```
Steps - Iteratively or Recursively

- Starting at the root

    - Check if there is a root, if not - we're done searching!

    - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!

    - If not, check to see if the value is greater than or less than the value of the root

    - If it is greater 

        - Check to see if there is a node to the right

            - If there is, move to that node and repeat these steps

            - If there is not, we're done searching!

    - If it is less

        - Check to see if there is a node to the left

            - If there is, move to that node and repeat these steps

            - If there is not, we're done searching!
```

# Big O of BST

Insertion - O(log n)

Searching - O(log n)