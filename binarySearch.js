const binarySearch = (n, arr) => {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    middle = Math.floor((left + right) / 2)
    if (n === arr[middle]) return true
    else if (n > arr[middle]) left = middle + 1
    else if (n < arr[middle]) right = middle - 1
  }
  return -1
}
console.log(binarySearch(10, [1, 3, 4, 5]))
