let arr = [0, 1]
let i = 1
const recFab = (n) => {
  if (n < 2) return 1
  else {
    return recFab(n - 1) + recFab(n - 2)
  }
}
console.log(recFab(5))

// bigO=O(2^n)
