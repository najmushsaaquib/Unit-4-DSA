// search if the key is present in the arr or not
// arr is sorted but how that is unknown?

// let arr = [75, 65, 60, 50, 40, 25, 22, 5];
let arr = [10];

let key = 1;

console.log(searchKey(arr, key));

function searchKey(arr, key) {
  if (arr.length == 1) {
    return arr[0] == key ? 0 : -1;
  }

  let low = 0;
  let high = arr.length - 1;
  if (arr[low] < arr[high]) {
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);

      if (key == arr[mid]) return mid;
      else if (key < arr[mid]) high = mid - 1;
      else low = mid + 1;
    }

    return -1;
  } else {
    while (low <= high) {
      let mid = Math.floor(low + (high - low) / 2);

      if (key == arr[mid]) return mid;
      else if (key < arr[mid]) low = mid + 1;
      else high = mid - 1;
    }

    return -1;
  }
}
