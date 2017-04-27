"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
class Trie {
    constructor() {
        this.root = new node_1.TrieNode();
    }
    insert(word) {
        let children = this.root.children;
        let i = 0;
        for (const char of word) {
            let node;
            if (children.get(char)) {
                node = children.get(char);
            }
            else {
                node = new node_1.TrieNode(char);
                children.set(char, node);
            }
            children = node.children;
            if (i++ === word.length - 1) {
                node.isLeaf = true;
            }
        }
    }
}
exports.Trie = Trie;
//# sourceMappingURL=trie.js.map