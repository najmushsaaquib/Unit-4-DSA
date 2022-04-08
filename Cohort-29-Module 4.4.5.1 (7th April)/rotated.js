let arr = [11, 12, 15, 18, 2, 5, 6, 8];

// countRotations(arr)
console.log(countRotations(arr))

function countRotations(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = parseInt(low + (high - low) / 2);
    let pre = (mid + n - 1) % n;
    let next = (mid + 1) % n;

    if (arr[mid] < arr[pre] && arr[mid] > arr[next]) {
      return mid;
    }

    if (arr[low] <= arr[mid]) {
      low = mid + 1;
    } else if (arr[mid] <= arr[high]) {
      high = mid - 1;
    }
  }
}
