# Queue

Objectives

1. Define: what a queue is

2. Understand: use cases for a queue

3. Implement: operations on a queue data structure

# 1. What is a queue?

A FIFO data structure!

- First In First Out

# 2. How and where it used?

Queues exist everywhere! Think about the last time you waited in line....

1. Background tasks

2. Uploading resources

3. Printing / Task processing

# 4. Queue methods

## Enqueue

Adding to the beginning of the Queue

- Remember, queues are a FIFO data structure

```
- This function accepts some value

- Create a new node using that value passed to the function

- If there are no nodes in the queue

     set this node to be the first and last property of the queue

- else
     set the next property on the current last to be that node, and then set the last property of the queue to be that node

- Increment the size of the queue by 1
```

## Dequeue

Removing from the beginning of the Queue!

Remember, queues are a FIFO data structure

```
- If there is no first property
    - just return null

- Store the first property in a variable

- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null

- If there is more than 1 node
     set the first property to be the next property of first

- Decrement the size by 1

- Return the value of the node dequeued
```

# BIG O of QUEUES

Insertion - O(1)

Removal - O(1)

Searching - O(N)

Access - O(N)

# RECAP

```
Queues are a FIFO data structure, all elements are first in first out.
```

```
Queues are useful for processing tasks and are foundational for more complex data structures
```

```
Insertion and Removal can be done in O(1)
```
