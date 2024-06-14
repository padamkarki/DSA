// Binary heaps are a type of binary tree used for implementing priority queues.
// They can be of two types: min-heaps and max-heaps. In a min-heap, the key at the
// root must be the smallest among all keys present in the binary heap. The same
// property must be recursively true for all subtrees of that root. A max-heap is
// similar but with the root being the largest key.

//heap with arrays

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1); // bubbleup converts it to heap again
  }

  // for insert
  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  remove() {
    // top or first will be popped and return
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return root;
  }
  bubbleDown(index) {
    //for remove
    const length = this.heap.length;
    let lChildIndex = 2 * index + 1;
    let rChildIndex = 2 * index + 2;
    let smallest = index;

    // Compare with the left child and update 'smallest' if necessary
    if (lChildIndex < length && this.heap[lChildIndex] < this.heap[smallest]) {
      smallest = lChildIndex;
    }

    // Compare with the right child and update 'smallest' if necessary
    if (rChildIndex < length && this.heap[rChildIndex] < this.heap[smallest]) {
      smallest = rChildIndex;
    }
    // If the smallest node is not the current node, swap and continue bubbling down
    if (smallest !== index) {
      this.swap(index, smallest);
      this.bubbleDown(smallest);
    }
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
}
