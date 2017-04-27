"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TrieNode {
    constructor(key) {
        this.isLeaf = false;
        this.character = key;
        this.children = new Map();
    }
}
exports.TrieNode = TrieNode;
//# sourceMappingURL=node.js.map