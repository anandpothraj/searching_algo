function recursiveBinarySearch(arr, target){
    return binarySearch(arr, target, 0, arr.length-1);
}

function binarySearch(arr, target, left, right){
    if(left > right){
        return -1;
    }
    let mid = Math.floor((left+right)/2);
    if(target === arr[mid]){
        return mid;
    }
    if(target < arr[mid]){
        return binarySearch(arr, target, left, mid-1);
    }
    else{
        return binarySearch(arr, target, mid+1, right);
    }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));  // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1