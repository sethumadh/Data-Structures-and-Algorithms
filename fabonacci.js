

// fabonacci
const fab = (n) => {
  if (n <= 2) {
    return arr
  }

  let arr = [0, 1]
  for (let i = 1; i <= n - 2; i++) {
    arr[i + 1] = arr[i] + arr[i - 1]
  }
  return arr[arr.length-1]
}

console.log(fab(10))



// Big-0=O(n)