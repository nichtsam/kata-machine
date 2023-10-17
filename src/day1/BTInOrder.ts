export default function in_order_search(
    head: BinaryNode<number>,
    path: number[] = [],
): number[] {
    head.left && in_order_search(head.left, path);
    path.push(head.value);
    head.right && in_order_search(head.right, path);
    return path;
}
