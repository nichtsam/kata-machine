const getMiddle = (low: number, high: number): number => {
    return low + Math.floor((high - low) / 2);
};

export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const mid = getMiddle(low, high);
        const hay = haystack[mid];

        if (hay === needle) {
            return true;
        }

        if (haystack[mid] < needle) {
            low = mid + 1;
        } else {
            high = mid;
        }
    } while (low < high);

    return false;
}
