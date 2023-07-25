# Stack

Objectives

1. Define: what a stack is

2. Understand: use cases for a stack

3. Implement: operations on a stack data structure

# 1. What is a stack?

A `LIFO` data structure!

- Last In First Out

The last element added to the stack will be the first element removed from the stack

# 2. How it used?

Think about a stack of plates, or a stack of markers, or a stack of....anything.

As you pile it up the last thing (or the topmost thing) is what gets removed first.

![](https://prepinsta.com/wp-content/uploads/2023/02/Representation-of-Stack-As-Linked-linked-in-C.webp)

# 3. Where stacks are used

1. Managing function invocations - call stack

2. Undo / Redo

3. Routing (the history object) is treated like a stack!

# 4. how to implements stack?

There is more than one way of implementing a stack

- array

- singly linked list

# 5. stack methods

## Push

Add a value to the top of the stack!

```
- The function should accept a value

- Create a new node with that value

- If there are no nodes in the stack, set the first and last property to be the newly
created node

- If there is at least one node, create a variable that stores the current first property on the stack

- Reset the first property to be the newly created node

- Set the next property on the node to be the previously created variable

- Increment the size of the stack by 1
```

## Pop

Remove a value from the top of the stack!

```
- If there are no nodes in the stack, return null

- Create a temporary variable to store the first property on the stack

- If there is only 1 node, set the first and last property to be null

- If there is more than one node, set the first property to be the next property on
the current first

- Decrement the size by 1

- Return the value of the node removed
```

# 6. Big O of stacks

Insertion - O(1)

Removal - O(1)

Searching - O(N)

Access - O(N)

# 7. RECAP

```
Stacks are a LIFO data structure where the last value in is always the first one out.
```

```
Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
```

```
They are not a built in data structure in JavaScript, but are relatively simple to implement
```

```
Insert and remove are both O(1)
```
