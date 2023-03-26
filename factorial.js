//factorial array

const fact = (n) => {
  let arr = [1, 2]
  for (let i = 0; i < n-2; i++) {
    arr[i + 2] = arr[i] * arr[i + 1]
  }
  return arr
}
console.log(fact(10))
