//
function mergeSort(arr1, arr2) {
  let i = 0
  let j = 0
  let sortedArray = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      sortedArray.push(arr2[j])
      j++
    } else {
      sortedArray.push(arr1[i])
      i++
    }
  }
  while (i < arr1.length) {
    sortedArray.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    sortedArray.push(arr2[j])
    j++
  }

  return sortedArray
}

console.log(mergeSort([1, 5, 8, 9], [2, 3, 4, 6]))
