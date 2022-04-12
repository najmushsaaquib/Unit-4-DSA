function runProgram(input = "") {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  console.log(arr, n);
}

function minimumElement(arr, n) {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    let next = (mid + 1) % n;
    let previous = (mid + n - 1) % n;

    if (arr[mid] < arr[next] && arr[mid] < arr[previous]) {
      return arr[mid];
    } else if (arr[low] < arr[mid]) {
      low = mid + 1;
    } else if (arr[mid] <= arr[high]) {
      high = mid - 1;
    }
  }
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
