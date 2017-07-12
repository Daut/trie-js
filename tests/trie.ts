import { Trie } from "../src/trie";

const trie = new Trie();

trie.insert("Bozidar");
trie.insert("Dautovic");
trie.insert("Boki");

console.warn(trie.search("Bozidar"));
console.warn(trie.searchNode("Bozi"));
