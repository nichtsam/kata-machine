export default class ArrayList<T> {
    private array: T[];
    private capacity: number;
    private _length: number;

    get length() {
        return this._length;
    }

    constructor(capacity: number) {
        this.capacity = capacity;
        this.array = new Array(this.capacity);
        this._length = 0;
    }

    private growArray() {
        this.capacity *= 2;
        const newArray = new Array(this.capacity);
        for (let i in this.array) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length || idx < 0) {
            throw new Error("Invalid index to insert at");
        }

        if (this._length + 1 > this.capacity) {
            this.growArray();
        }

        for (let i = this._length; i > idx; i--) {
            this.array[i] = this.array[i - 1];
        }

        this.array[idx] = item;
        this._length++;
    }
    append(item: T): void {
        this.insertAt(item, this.length);
    }
    remove(item: T): T | undefined {
        let idx;
        for (let i in this.array) {
            if (this.array[i] === item) {
                idx = Number(i);
            }
        }

        if (typeof idx !== "number") {
            return undefined;
        }

        return this.removeAt(idx);
    }
    get(idx: number): T | undefined {
        return this.array[idx];
    }
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this._length) {
            return undefined;
        }

        const temp = this.array[idx];

        for (let i = idx; i < this._length; i++) {
            this.array[i] = this.array[i + 1];
        }

        delete this.array[this._length - 1];
        this._length--;

        return temp;
    }
}
