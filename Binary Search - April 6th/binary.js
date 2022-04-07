// search if the key is present in the arr or not

let arr = [10,20,21,25,30,40,50,60,70]
let key = 32;

console.log(searchKey(arr,key) )

function searchKey(arr,key) {

    let low = 0;
    let high = arr.length-1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if(key == arr[mid]) return mid;
        else if(key < arr[mid]) high = mid - 1;
        else low = mid+1
    }

    return -1;
}
