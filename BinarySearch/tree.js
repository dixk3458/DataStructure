class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    // root에서 내려가면서 현재 노드가 없을때까지 반복
    while (currentNode !== null) {
      // 추가할 값이 현재 값보다 클 경우
      if (currentNode.value < value) {
        // 그리고 right에 값이 없어 추가할수있는경우
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        // right에 값이 있어 더 내려가야할경우
        currentNode = currentNode.right;
      } else {
        // 마찬가지로 left에 값이 없어 바로 추가할수있는경우
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        // 값이 있어 더 내려갈수있는경우
        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    // insert 처럼 tree내려가면서 조사하면된다.

    // 만약 root가 null이라면 아무것도 없는것
    if (this.root === null) {
      return false;
    }

    // 최상위 node부터 시작
    let currentNode = this.root;

    while (currentNode !== null) {
      // 현재 노드의 값이 찾는값이라면 true 반환
      if (currentNode.value === value) {
        return true;
      }

      // 그렇지 않으면 내려가야한다.

      // 찾는 값이 더 클 경우 오른쪽으로 내려가야한다.
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        // 아니면 왼쪽으로
        currentNode = currentNode.left;
      }
    }
    // tree 반복 동안 못찾았으면 false 반환
    return false;
  }
}

const binarySearch = new BinarySearchTree();

binarySearch.insert(5);
binarySearch.insert(8);
binarySearch.insert(2);
binarySearch.insert(4);
binarySearch.insert(6);

console.log(binarySearch);
console.log(binarySearch.has(1));
