function quickSort(array, left, right) {
    if (left < right) {
        let pivotIndex = partition(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
}

function partition(array, left, right) {
    let pivot = array[left];
    let i = left;
    let j = right;

    while (i < j) {
        while (array[i] <= pivot && i < right) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i < j) {
            // Swap array[i] and array[j]
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    // Swap pivot (array[left]) and array[j]
    array[left] = array[j];
    array[j] = pivot;

    return j;
}

// Example usage:
let array = [35, 50, 15, 25, 80, 20, 90, 45];
quickSort(array, 0, array.length - 1);
console.log("Sorted array:", array);
