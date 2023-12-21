# about structure

notion - md files for explanation about data structure

src - source code

# study logs

# 설정 복습

`compilerOption : {"outDir": "./build"}`

# 1. type의 순환 참조성

```ts
interface NodeInterFace<T> {
  val: T;
  next: Pointer<T>;
}

type Pointer<T> = NodeInterFace<T> | null;
```

# 2. class 내부에 타입선언

this.val과 constructor param을 통해 충분히
타입정보를 제공했다고 생각했는데,
class 내부에 다시 프로퍼티 타입을 알려줘야 했다.

```ts
class ListNode<T> implements NodeInterFace<T> {
  val: T;
  next: Pointer<T>;

  constructor(val: T, next: Pointer<T>) {
    this.val = val;
    this.next = next;
  }
}
```

# 3. style

return의 대상이 같다면
마지막에만 return 하나를 써주는것으로 충분하다.

if else의 중괄호 내부에는 return을 넣지말자.

# 4. set

다음 코드는 리스트 내부 노드값도 바꾼다.
이것이 바로 자바스크립트의 신비..?

```js
const node = this.get(index);
node.val = value;
```

# 5 reverse null 참조 문제

여러가지 문제가 있었다.

첫번째로, null 의 속성을 참조하게 되는것

그것은 if문을 while문으로 고칠경우 조건으로 null 이 아닌경우만 사용
할수 있게되므로 쉽게 해결이 가능하다.

생각보다 타입설계가어려운것같다.

```ts
reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;


        while (node !== null) {
            let next = node.next;
            [node!.next, prev, node] = [ prev, node, next];
        }

        return this

    }
```

# 6 doubly linked list circular ref

doubly-linked-list에서

next의 prev는 자기자신이므로

circular ref 가 발생하는것은 완전히 자연스러운일이다.

```
DoublyLinkedList {
  head: <ref *1> NodeForDoublyLinkedList {
    val: '111',
    next: NodeForDoublyLinkedList {
      val: '222',
      next: [NodeForDoublyLinkedList],
      prev: [Circular *1]
    },
    prev: null
  },
  tail: <ref *2> NodeForDoublyLinkedList {
    val: '333',
    next: null,
    prev: NodeForDoublyLinkedList {
      val: '222',
      next: [Circular *2],
      prev: [NodeForDoublyLinkedList]
    }
  },
  length: 3
}
```

# 7 reverse

if don't change the node

```
while(node)
```

this code doens't stop to the end of the world

# stack

1. 처음 만들었을땐
   bottom이 왜 필요한지 몰랐다.

그런데 지금도 모른다.
왜냐하면 저것은 그저 top과 bottom이 일치할경우 (stack size가 1일경우)
bottom을 null로 초기화하는 작업만 하고있을뿐이다.

2. remove가 `O(1)`: 상수시간에 해결되어야한다.

처음에는 linked-list와 같이 `while (node.next)`를 사용했으나, 그렇게되면
시간복잡도가 `O(n)` 이 된다.

3. 스택은 Top을 내보내고
   Top의 포인터는 아래에위치한 노드를 가리킨다

```
□ top
↓
□
↓
□
↓
□ bottom
```

```
push

```

1. create newTop
2. newtop.next = this.top

□ newTop
↓
□ this.top
↓
□
↓
□
↓
□ bottom

3. set this.top = newTop

□ this.top === newTop
↓
□
↓
□
↓
□
↓
□ bottom

```
pop
```

const popNode = this.top

□ this.top === popNode
↓
□ this.top.next
↓
□
↓
□
↓
□ bottom

this.top = this.top.next

□ popNode
↓
□ this.top //this.top.next
↓
□
↓
□
↓
□ bottom

```


queue
```

head tail
□ → □ → □

```

enqueue
```

create newNode
this.tail.next = newNode

head tail newNode
□ -→ □ -→ □ -→ □

this.tail = newNode

head tail = newNode
□ -→ □ -→ □ -→ □

```

dequeue

```

const deqeueNode = this.head

dequeue
head tail
□ -→ □ -→ □ -→ □

this.head = this.head.next

dequeue head tail
□ --→ □ --→ □ --→ □

run dequeue

head tail
□ --→ □ --→ □

```

```
