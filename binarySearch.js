// Find the position of a target element within a sorted array using binary search.

const arr = ['a', 'b', 'c', 'x', 'y', 'z'];

// O(Log N) - faster than linear loop
// instead of starting at index 0 we start in the middle

function findMe(target, start, end) {

    if (start > end) {
        return 'Not Found';
    }

    const middle = Math.floor((start + end) / 2 );

    // if middle = target then return
    if (arr[middle] === target) {
        return `Found it at index ${middle}`
    }

    // if middle < target then search (right)
    if (arr[middle] < target) {
        return findMe(target, middle + 1, end);
    }

    // if middle > target then search (left)
    if (arr[middle] > target) {
        return findMe(target, start, middle - 1);
    }

}

console.log(findMe('b', 0, arr.length - 1));