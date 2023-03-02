const linearSearch = (n, arr) => {
  let i = 0
  for (let value of arr) {
    if (value === n) {
      return i
    }
    i++
  }
  return -1
}

console.log(linearSearch(5, [1, 3, 3, 5]))

// bigO = O(n)
