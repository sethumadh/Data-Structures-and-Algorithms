const bubbleSort = (arr) => {
  let swapped = true
  while (swapped == true) {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  }
  return arr
}

console.log(bubbleSort([10, 3, 4, 5, 2, 4, 8, 1]))
