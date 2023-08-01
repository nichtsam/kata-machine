type Node<T> = {
    val: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;

        const node = {
            val: item,
        };

        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const temp = this.head;

        if (!this.head.next) {
            this.head = this.tail = undefined;
        } else {
            this.head = this.head.next;
        }

        temp.next = undefined;
        return temp.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
