// search the first occurrence of  the key  in the arr 

let arr = [1,2,8,8,8,9,12,15,19]
let key = 8;

console.log(firstOccurrence(arr,key) )

function firstOccurrence(arr,key) {
    if (arr.length == 1) {
        return arr[0] == key ? 0 : -1;
      }
    let low = 0;
    let high = arr.length-1;
    let res = 0;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        
        if(key == arr[mid]) {
            res = mid;
            high = mid - 1
        }

        else if(key < arr[mid]) high = mid - 1
        else low = mid+1
    }

    return res;
}
