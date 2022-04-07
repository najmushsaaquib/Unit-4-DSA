// count how many times a Sorted array is rotated

let arr = [25, 30, 40, 50, 60, 70, 10, 12, 15];

console.log(countRotate(arr));

function countRotate(arr) {
  let n = arr.length;
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let pre = (mid + n - 1) % n;
    let post = (mid + 1) % n;

    if (arr[mid] < arr[pre] && arr[mid] < arr[post]) return mid;
    if (arr[low] < arr[mid]) low = mid + 1;
    else if (arr[mid] < arr[high]) high = mid - 1;
  }
}
