const getMid = (lower: number, upper: number) => {
    return Math.floor((lower + upper) / 2);
};

const swap = (arr: any[], a: number, b: number) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
};

const pivot_sort = (arr: number[], from: number, to: number): number => {
    const mid = getMid(from, to);
    const pivot = arr[mid];
    swap(arr, mid, to);

    let smallerCount = 0;
    for (let i = from; i < to; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, from + smallerCount);
            smallerCount++;
        }
    }

    const pivotIndex = from + smallerCount;
    swap(arr, to, pivotIndex);
    return pivotIndex;
};

export default function quick_sort(
    arr: number[],
    from = 0,
    to = arr.length - 1,
): void {
    if (from >= to) {
        return;
    }

    const pivotIndex = pivot_sort(arr, from, to);

    quick_sort(arr, from, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, to);
}
