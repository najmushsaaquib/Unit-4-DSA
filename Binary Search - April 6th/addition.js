let [n, k] = [5, 3];
let arr = [9, 4, 9, 7, 4];

let obj = {};

arr.forEach((i) => {
  if (obj[i] === undefined) obj[i] = 1;
  else obj[i] = obj[i] + 1;
});

console.log(obj);
