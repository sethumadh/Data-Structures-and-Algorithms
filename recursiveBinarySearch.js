const recursiveBinarySearch = (n, arr) => {
    let left = 0
    let right = arr.length - 1
    return search(n, arr, left, right)
  }
  
  function search(n, arr, left, right) {
    if (left > right) return -1
    let middle = Math.floor((left + right) / 2)  // declare middle as a local variable
    if (n === arr[middle]) return middle
    else if (n > arr[middle]) {
      left = middle + 1
      return search(n, arr, left, right)
    } else if (n < arr[middle]) {
      right = middle - 1
      return search(n, arr, left, right)
    }
  }
  console.log(recursiveBinarySearch(1, [1, 3, 4, 5])) // Output: 0
  console.log(recursiveBinarySearch(5, [1, 3, 4, 5])) // Output: 3
  console.log(recursiveBinarySearch(2, [1, 3, 4, 5])) // Output: -1
  