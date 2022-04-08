function runProgram(input = "") {
  input = input.trim().split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  arr.sort((a,b) => {return (a-b)})
  console.log(iterativeSearch(arr, n, k))
}

function iterativeSearch(arr, n, k) {
  if (n == 1) {
    return arr[0] == k ? 1 : -1;
  }

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if(k == arr[mid]) return 1;
    else if(k < arr[mid]) high = mid - 1
    else low = mid + 1;
  }
  return -1;
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
