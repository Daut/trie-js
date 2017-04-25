var TrieNode = (function () {
    function TrieNode() {
        this.words = 0;
        this.prefixes = 0;
        this.edges = new Map();
    }
    TrieNode.prototype.addWord = function () {
        return;
    };
    TrieNode.prototype.countPrefixes = function () {
        return this.prefixes;
    };
    TrieNode.prototype.countWords = function () {
        return this.words;
    };
    return TrieNode;
}());
//# sourceMappingURL=node.js.map