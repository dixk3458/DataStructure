class Node {
  // Node를 생성할때
  // 해당 Node가 가지는 값
  // 다음 Node를 가리키는 주소를 작성 (현재는 X)
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  // 연결리스트의
  // 시작점을 가리키는 : head
  // 끝점을 가리키는 : tail
  constructor() {
    this.head = null;
    this.tail = null;
  }
// 단일 연결리스트

class Node {
  // 나의 값은 value
  // 내 다음 노드의 주소는 nextNode
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  // 연결 리스트에서 제일 앞은 누구인가?
  // 연결 리스트에서 제일 끝의 노드는 누구인가?
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // 추가함수
  append(value) {
    // 새로운 노드 생성
    // 이것을 추가할 예정
    const newNode = new Node(value);

    // 1) 현재 연결 리스트가 비어있는가?
    if (this.head === null) {
      // 그러면 새로운 노드를 제일 먼저 가리켜줘
      this.head = newNode;

      // 연결 리스트의 끝부분도 일단 가리켜줘
      this.tail = newNode;
    } else {
      // 2) 그렇지 않으면, 연결 리스트의 제일 끝부분 노드 다음으로 추가
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  // 중간 삽입
  insert(node, value) {
    // 먼저 새로운 노드 생성
    const newNode = new Node(value);
    // node의 다음자리에 들어와야한다.

    // 일단 기존 노드의 next가 가리키고 있던 화살표를
    // 새로운 노드의 nextNode에 전달하자.
    newNode.nextNode = node.nextNode;

    // 기존 노드는 newNode를 가리키면된다.
    node.nextNode = nextNode;
  }

  remove(value) {
    // 연결 리스트에서 value값을 가진 노드를 먼저 찾자
    // 근데 그 노드의 이전 노드의 next를 찾은 노드의 next로 연결해야하기때문에
    // preNode가 필요하다.

    // 1) head가 가리키는 노드의 value인경우 검사
    if (this.head.value === value) {
      this.head = this.head.nextNode;
    } else {
      // 그렇지 않으면 노드 탐색하면서 찾기
      let preNode = this.head;
      while (preNode.nextNode !== null && preNode.nextNode.value !== value) {
        preNode = preNode.nextNode;
      }

      if (preNode.nextNode !== null) {
        preNode.nextNode = preNode.nextNode.nextNode;
      } else {
        return -1;
      }
    }
  }
  display() {
    let currNode = this.head;
    let displayString = '[';
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }

    displayString = displayString.substring(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}

const list = new LinkedList();
list.append(2);
list.append(4);
list.append(3);

console.log(list);

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }

    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let preNode = this.head;
    while (preNode.next.value !== value) {
      preNode = preNode.next;
    }

    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = '[';
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }

    displayString = displayString.substring(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);

linkedList.display();

console.log(linkedList.find(3));
