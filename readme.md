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
