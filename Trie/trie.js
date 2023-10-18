// class Node {
//   constructor(value = '') {
//     this.value = value;
//     this.children = new Map();
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new Node();
//   }

//   insert(string) {
//     let currentNode = this.root;

//     for (let char of string) {
//       if (!currentNode.children.has(char)) {
//         currentNode.children.set(char, new Node(currentNode.value + char));
//       }

//       currentNode = currentNode.children.get(char);
//     }
//   }

//   has(string) {
//     let currentNode = this.root;

//     for (let char of string) {
//       if (!currentNode.children.has(char)) {
//         return false;
//       }
//       currentNode = currentNode.children.get(char);
//     }

//     return true;
//   }
// }

// const trie = new Trie();
// trie.insert('cat');
// trie.insert('can');

// console.log(trie.has('cat'));
// console.log(trie.has('can'));
// console.log(trie.has('cap'));

class Node {
  constructor(value = '') {
    this.value = value;

    // 자식들을 Map으로 관리하여 각 key마다 가지를 뻗어갈수있도록한다.
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    // 트라이를 처음 만들면 root 노드가 생성
    // value를 주면안된다. root이기 때문에
    this.root = new Node();
  }

  // 추가
  insert(string) {
    // 문자를 순회하면서 한글자씩 트라이에 가지를 쳐간다.
    let currentNode = this.root;

    for (let char of string) {
      // 키 가졌냐? (문자 있냐?)

      if (!currentNode.children.has(char)) {
        // 문자 없으면
        // 그 키로 등록해라
        currentNode.children.set(char, new Node(currentNode.value + char));
      }

      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;

    for (let char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }
}

const trie = new Trie();

trie.insert('ab');
trie.insert('b');
