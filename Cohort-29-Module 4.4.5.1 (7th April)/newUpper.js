let arr = [0, 2, 4, 4, 5, 5, 7, 7, 9, 10];
let key = 3;

    console.log(upper(arr, key))

function upper(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let val = 0;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] > key) {
      val = mid;
      high = mid - 1;
    } else if (arr[mid] <= key) {
      low = mid + 1;
    }
  }

  return val;
}
