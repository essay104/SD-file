// 연결리스트에서 노드 아이템으로 활용될 요소를 class생성

class Node {
  constructor(data, next, prev = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

// 노드 아이템이 모여서 연결리스트가 되었을 때, 갖추고 있어야 할 기능 정의 class 생성

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  //새롭게 생성된 노드 아이템을 출력시켜주는 추상자료형 함수
  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode !== null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode !== null) {
        text += ",";
      }
    }
    text += "]";
    console.log(text);
  }

  // 새로운 노드 아이템을 추가시켜주는 추상자료형 함수

  insertAt(index, data) {
    //예외 조항 처리
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어 갔습니다.");
    }

    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {}
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      newNode.next.prev = newNode;
    }

    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.count++;
  }

  //연결리스트의 마지막 인덱스 영역에 데이터를 삽입 추상자료형 함수
  insertAt(data) {
    this.insertAt(this.count, data);
  }

  //연결리스트에서 특정 인덱스에 있는 값을 제거해주는 추상 자료형 함수
  deleteAt(index) {
    //예외조항처리
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다.");
    }

    let currentNode = this.head;

    if (index === 0) {
      let deleteNode = this.head;
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      this.count--;
      return deleteNode;
    } else if (index === this.count - 1) {
      let deleteNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count--;
      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count--;
      return deleteNode;
    }
  }

  // 연결리스트에서 마지막 인덱스 영역에 데이터를 삭제 추상자료형 함수
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  //해시 테이블 자료구조에서 데이터를 추가하는 추상자료형 함수
  set(key, value) {
    this.arr[this.hashFunction(key)].insertAt(0, newHashDate(key, value));
  }

  //해시테이블 자료구조에서 데이터를 찾아오는 추상자료형 함수
  get(key) {
    let currentNode = this.arr[this.hashFunction(key)].head;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // 해시테이블 자료구조에서 데이터를 제거하는 추상자료형 함수
}
