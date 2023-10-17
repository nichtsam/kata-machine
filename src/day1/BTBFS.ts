export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head];

    let node;
    while (typeof (node = q.shift()) !== "undefined") {
        if (node.value === needle) {
            return true;
        }
        node.left && q.push(node.left);
        node.right && q.push(node.right);
    }

    return false;
}
