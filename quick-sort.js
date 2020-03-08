/**
 * 
 * @param {[number]} arr 
 * @param {number} i 
 * @param {number} j 
 */
const swap = (arr, i, j) => {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
}

/**
 * 
 * @param {[number]} arr 
 * @param {number} start 
 * @param {number} end
 */
const quickSort = (arr, start, end) => {

    if (start >= end) return;

    let pivot = end;
    let finalPivotPos = pivot;

    while (true) {
        
        let itemFromLeft = ((arr) => {
            for (let i = start; i < pivot - 1; i++) {
                if (arr[i] > arr[pivot]) return i;
            }
        })(arr);

        let itemFromRight = ((arr) => {
            for (let i = pivot - 1; i >= start; i--) {
                if (arr[i] < arr[pivot]) return i;
            }
        })(arr);

        if (itemFromLeft !== undefined && itemFromRight !== undefined && itemFromLeft < itemFromRight) {
            swap(arr, itemFromLeft, itemFromRight);
        } else if (itemFromLeft >= itemFromRight || itemFromRight === undefined) {
            swap(arr, pivot, itemFromLeft);
            finalPivotPos = itemFromLeft;
            break;
        } else break;
    }
    
    quickSort(arr, start, finalPivotPos - 1);
    quickSort(arr, finalPivotPos + 1, end);

    return arr;
}

let arr = [5,3,2,10,7,4];

let sorted = quickSort(arr, 0, arr.length - 1);
console.log(...sorted);
