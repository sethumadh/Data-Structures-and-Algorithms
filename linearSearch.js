const linearSearch = (n, arr) => {
  for (let index of arr) {
    if (n === arr[index]) return index
  }
  return -1
}
console.log(linearSearch(5, [1, 3, 3, 5]))
// bigO = o(log(n))
