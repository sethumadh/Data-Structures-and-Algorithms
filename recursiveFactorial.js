const recFact = (n) => {
  if (n < 2) return 1
  else {
    return n * recFact(n - 1)
  }
}
console.log(recFact(5))

// bigO=O(2^n)
