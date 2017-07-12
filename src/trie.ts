import { TrieNode } from "./node";

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    public insert(word: string) {
        let children = this.root.children;
        let level = 0;

        for (const char of word) {
            let node;
            if (children.get(char)) {
                node = children.get(char);
            } else {
                node = new TrieNode(char);
                children.set(char, node);
            }

            children = node.children;

            if (level++ === word.length - 1) {
                node.isLeaf = true;
            }
        }
    }

    public search(word: string) {
        let exists = true;
        let currentNode = this.root.children.get(word[0]);

        for (let i = 0; i < word.length && exists; i++) {
            const char = currentNode ? currentNode.character : null;
            if (char === word[i]) {
                currentNode = currentNode.children.get(word[i + 1]);
            } else {
                exists = false;
            }
        }

        return exists;
    }
}

export { Trie };
