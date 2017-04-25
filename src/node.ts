class TrieNode {
    private words: number;
    private prefixes: number;
    private edges: Map<string, TrieNode>;

    constructor() {
        this.words = 0;
        this.prefixes = 0;
        this.edges = new Map<string, TrieNode>();
    }

    public addWord(): void {
        return;
    }

    public countPrefixes(): number {
        return this.prefixes;
    }

    public countWords(): number {
        return this.words;
    }
}
