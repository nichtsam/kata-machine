export default function post_order_search(
    head: BinaryNode<number>,
    path: number[] = [],
): number[] {
    head.left && post_order_search(head.left, path);
    head.right && post_order_search(head.right, path);
    path.push(head.value);
    return path;
}
