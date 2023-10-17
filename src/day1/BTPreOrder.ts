export default function pre_order_search(
    head: BinaryNode<number>,
    path: number[] = [],
): number[] {
    path.push(head.value);
    head.left && pre_order_search(head.left, path);
    head.right && pre_order_search(head.right, path);
    return path;
}
