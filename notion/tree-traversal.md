# TRAVERSING A TREE

Two ways:

Breadth-first Search
Depth-first Search

# implements

### BFS
```
Steps - Iteratively

- Create a queue (this can be an array) and a variable to store the values of nodes visited

- Place the root node in the queue

- Loop as long as there is anything in the queue

    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes

    - If there is a left property on the node dequeued - add it to the queue

    - If there is a right property on the node dequeued - add it to the queue

- Return the variable that stores the values
```

### DFS - InOrder
```
Steps - Recursively

- Create a variable to store the values of nodes visited

- Store the root of the BST in a variable called current

- Write a helper function which accepts a node
    
    - If the node has a left property, call the helper function with the left property on the node

    - Push the value of the node to the variable that stores the values

    - If the node has a right property, call the helper function with the right property on the node

- Invoke the helper function with the current variable

- Return the array of values
```

### DFS - PreOrder
```
Steps - Recursively

- Create a variable to store the values of nodes visited

- Store the root of the BST in a variable called current

- Write a helper function which accepts a node

    - Push the value of the node to the variable that stores the values

    - If the node has a left property, call the helper function with the left property on the node

    - If the node has a right property, call the helper function with the right property on the node

- Invoke the helper function with the current variable

- Return the array of values
```

### DFS - PostOrder
```
Steps - Recursively

- Create a variable to store the values of nodes visited

- Store the root of the BST in a variable called current

- Write a helper function which accepts a node

    - If the node has a left property, call the helper function with the left property on the node

    - If the node has a right property, call the helper function with the right property on the node

    - Push the value of the node to the variable that stores the values

    -Invoke the helper function with the current variable

- Return the array of values
```


# RECAP

1. Trees are non-linear data structures that contain a root and child nodes

2. Binary Trees can have values of any type, but at most two children for each parent

3. Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater

4. We can search through Trees using BFS and DFS


# Bonus : Removing a Node in a BST

### 0 children

```
Steps - Iteratively

- Find the parent of the node that needs to be removed and the node that needs to be removed

- If the value we are removing is greater than the parent node

    - Set the right property of the parent to be null

- If the value we are removing is less than the parent node​

    - Set the left property of the parent to be null

- Otherwise, the node we are removing has to be the root, so set the root to be null
```


### 1 child

```
Steps - Iteratively

- Find the parent of the node that needs to be removed and the node that needs to be removed

- See if the child of the node to be removed is on the right side or the left side

- If the value we are removing is greater than the parent node​​

    - Set the right property of the parent to be the child

- If the value we are removing is less than the parent node​

    - Set the left property of the parent to be the child

- Otherwise, set the root property of the tree to be the child
```

### 2 children

```
Steps - Iteratively

- Find the parent of the node that needs to be removed and the node that needs to be removed

- Find the predecessor node and store that in a variable

- Set the left property of the predecessor node to be the left property of the node that is being removed

- If the value we are removing is greater than the parent node​​

    - Set the right property of the parent to be the right property of the node to be removed

- If the value we are removing is less than the parent node​

    - Set the left property of the parent to be the right property of the node to be removed
    
Otherwise, set the root of the tree to be the right property of the node to be removed
```