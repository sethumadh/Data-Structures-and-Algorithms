const quickSort = (arr) => {
  if (arr.length < 1) return arr
  let pivot = arr[arr.length - 1]
  let leftArray = []
  let rightArray = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) leftArray.push(arr[i])
    else rightArray.push(arr[i])
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}
console.log(quickSort([1, 10, 4, 13, 15, 2, 4, 8, 1]))
// BigO= O(n^2) - worst case
// avg case BigO= O(nlogn)
