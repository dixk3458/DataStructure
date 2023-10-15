// 다음 규칙에 따라 프로세스르 관리할 경우 특정 프로세스가 몇번째로
// 실행되는지 알아내면 됩니다.

// 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
// 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
// 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
//   3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    const value = this.front.value;
    this.front = this.front.next;
    return value;
  }

  peek() {
    return this.front.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();

  // queue에 데이터를 저장
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  // 큰것부터 정렬
  priorities.sort((a, b) => b - a);

  // queue를 검사해야한다.
  // node를 하나 뺏는데 queue에 그것보다 우선순위가 높은것이 있다.?
  // => 다시 넣기
  // 아니다?
  // => 그냥 빼기

  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (priorities[count] > currentValue[0]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
