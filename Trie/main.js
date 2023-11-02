class Node {
  consturcotr(value = '') {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (let s of string) {
      if (!currentNode.chilren.has(s)) {
        currentNode.children.set(s, currentNode.value + s);
      }
    }

    currentNode = currentNode.children.get(s);
  }

  has(string) {
    let currentNode = this.root;

    for (let s of string) {
      if (!currentNode.children.has(s)) {
        return false;
      }
      currentNode = currentNode.children.get(s);
    }

    return true;
  }
}
