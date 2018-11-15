'use strict';

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    static getDFSArray(node) {
        if (!node) return [];
        let arr = [node.value];
        if (node.left) {
            arr = arr.concat(Node.getDFSArray(node.left));
        }
        if (node.right) {
            arr = arr.concat(Node.getDFSArray(node.right));
        }
        return arr;
    }

    // Must produce a sequence of tree nodes rooted at the current one,
    // including it, enumerated in DFS order. Parent nodes must precede
    // child nodes, and left child must precede the right one.
    // https://en.wikipedia.org/wiki/Depth-first_search
    *[Symbol.iterator]() {
        const arr = Node.getDFSArray(this);
        for (let i = 0; i < arr.length; i++) {
            yield arr[i];
        }
    }
}

class Tasks {
    // Must return a tree like the one that's passed,
    // but with swapped left and right subtrees for each node.
    static transposeTree(root) {
        if (root) {
            const left = Tasks.transposeTree(root.right);
            const right = Tasks.transposeTree(root.left);
            return new Node(root.value, left, right)
        } else return null;
    }

    // Must return a random binary tree containing exactly nodeCount nodes.
    // Must be implemented in such a way that it return any possible binary tree
    // of nodeCount nodes with non-zero probability. In other words, there
    // must be no trees it never returns.
    // The value of all the nodes can be any -- e.g. null. I.e. you can
    // ignore the value in this task.
    static createRandomTree(nodeCount) {
        if (!nodeCount) return null;
        const leftCount = Math.floor(Math.random() * (nodeCount + 1));
        const rightCount = nodeCount - leftCount;
        const leftNode = Tasks.createRandomTree(leftCount);
        const rightNode = Tasks.createRandomTree(rightCount);
        const value = Math.florr(Math.random() * 100);
        return new Node(value, leftNode, rightNode);
    }

    // Must return the total # of different binary trees containing exactly
    // nodeCount nodes. "Different" here means structurally different,
    // i.e. values don't matter.
    static countTrees(nodeCount) {
        throw "Not implemented";
    }
}

let tree = new Node("Root",
    new Node("L"),
    new Node("R",
        new Node("RL"),
        new Node("RR",
            new Node("RRL"))));
console.log("Tree:", tree);

let transposed = Tasks.transposeTree(tree);
console.log("Tasks.transposeTree: ", transposed);

console.log("Iterating over: ", tree);
for (let node of tree) {
    console.log("-", node);
}

for (let n = 0; n < 10; n++) {
    let root = Tasks.createRandomTree(n);
    console.log("Tasks.createRandomTree(", n, "): ", tree);
}

for (let n = 0; n < 10; n++) {
    let count = Tasks.countTrees(n);
    console.log("Tasks.countTrees(", n, "): ", count);
}
