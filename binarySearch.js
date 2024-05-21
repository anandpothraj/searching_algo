function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(target === arr[mid]){
            return mid;
        }
        if(target < arr[mid]){
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 6));  // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1