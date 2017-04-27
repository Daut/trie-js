import { TrieNode } from "./node";

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    public insert(word: string) {
        let children = this.root.children;
        let i = 0;
        for (const char of word) {
            let node;
            if (children.get(char)) {
                node = children.get(char);
            } else {
                node = new TrieNode(char);
                children.set(char, node);
            }

            children = node.children;

            if (i++ === word.length - 1) {
                node.isLeaf = true;
            }
        }
    }
}

export { Trie };
