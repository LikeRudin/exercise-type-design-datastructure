# Priority queue

# 1. What is a PRIORITY QUEUE?

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.


# 2. Implement

```
 
- Write a Min Binary Heap - lower number means higher priority.
Each Node has a val and a priority.  Use the priority to build the heap.

- Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.

- Dequeue method removes root element, returns it, and rearranges heap using priority.
```

### MaxHeapify

```
Converting an array into a MaxBinaryHeap

- Create a new heap

- Iterate over the array and invoke your insert function

- return the values property on the heap
```

### Sort

```
We can sort an array in O(n log n) time and O(1) space by making it a heap!

- Make the array a max heap (use maxHeapify)

- Loop over the array, swap the root node with last item in the array

- After swapping each item, run maxHeapify again to find the next root node

- Next loop you'll swap the root node with the second-to-last item in the array and run maxHeapify again.

- Once you've run out of items to swap, you have a sorted array! 
```

# Big O of Binary Heaps

Insertion -   O(log N)

Removal -   O(log N)

Search -   O(N)

# RECAP

1. Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues

2. Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children

3. With just a little bit of math, we can represent heaps using arrays!