const insertionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let NTI = arr[i + 1]
    if (arr[i] > NTI) {
      arr[i + 1] = arr[i]
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] > NTI) {
          arr[j + 1] = arr[j]
          if (j === 0) {
            arr[j] = NTI
          }
        } else {
          arr[j + 1] = NTI
          break
        }
      }
    }
  }
  return arr
}

console.log(insertionSort([10, 13, 4, 15, 2, 4, 8, 1]))
