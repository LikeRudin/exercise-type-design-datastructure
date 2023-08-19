# 1. Hashtable

## Goal

map keys to values for highly efficiency lookup

## usecase

cash, many other works which take too long time to process with looping of array

## How to implement

1. make a hash code from input key

2. maps hash code to index of an array 

3. each element of array is linked list or sth
- to evade crash

## Big O

ideal case O(1)

bad case O(n)

O (log n)


---

# 2 ArrayList ＆ Resizable Arrays

## 1. goal

save data to be possible searching by indexes

it gives constant time to search item by index

## 2. use case

body of hashtable, queue, stack, many other case

## 3. Big O

inserting N elements take O(N)

each 1 element takes O (1)

---

# 3. String Builder

when add data to string

```js
string += string + w 
```
has too high space complexity 
