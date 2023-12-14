class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp();
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (parent.weight <= element.weight) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    removeMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild.weight < element.weight) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild.weight < element.weight) ||
                    (swap !== null && rightChild.weight < leftChild.weight)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }

    decreaseKey(node, newWeight) {
        let found = this.heap.find((element) => element.node === node);
        if (found) {
            found.weight = newWeight;
            this.bubbleUp();
        }
    }
}

function dijkstraEfficient(graph, startNode) {
    let distances = {};
    let visited = new Set();
    let minHeap = new MinHeap();

    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    minHeap.insert({ node: startNode, weight: 0 });

    while (!minHeap.isEmpty()) {
        let { node: currentNode } = minHeap.removeMin();

        if (visited.has(currentNode)) {
            continue;
        }
        visited.add(currentNode);

        let neighbors = graph[currentNode];
        for (let neighbor of neighbors) {
            let distance = distances[currentNode] + neighbor.weight;

            if (distance < distances[neighbor.node]) {
                distances[neighbor.node] = distance;
                minHeap.decreaseKey(neighbor.node, distance);
            }
        }
    }

    return distances;
}

// Utilizando o gráfico fornecido
const graph = {
    A: [{ node: 'B', weight: 1 }, { node: 'C', weight: 4 }],
    B: [{ node: 'A', weight: 1 }, { node: 'C', weight: 2 }, { node: 'D', weight: 5 }],
    C: [{ node: 'A', weight: 4 }, { node: 'B', weight: 2 }, { node: 'D', weight: 1 }],
    D: [{ node: 'B', weight: 5 }, { node: 'C', weight: 1 }]
};

const distances = dijkstraEfficient(graph, 'A');
console.log(distances);
