class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

// 핵심 키워드 '노드', '간선', '최단경로'
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  // 길이를 기억하는 배열
  const distance = Array(n + 1).fill(0);

  // 1번에서 1번까지의 거리
  distance[1] = 1;

  // BFS
  // 가까운거 먼저 탐색
  // 너비

  const queue = new Queue();

  queue.enqueue(1);
  // queue의 길이가 0이 아닐때 까지
  // queue에 요소가 빠지면 탐색이 끝난거
  while (!queue.isEmpty()) {
    // 출발 정점을 큐에서 제거하고
    // 거기에서 갈수있는 정점을 넣어주자.
    const src = queue.dequeue();

    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);

  return distance.filter(item => item === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
