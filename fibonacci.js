// // fabonacci
const fab = (n) => {
  const arr = [0, 1]
  for (let i = 0; i <= n - 3; i++) {
    arr[i + 2] = arr[i] + arr[i + 1]
  }
  return arr
}
console.log(fab(5))

// // Big-0=O(n)
