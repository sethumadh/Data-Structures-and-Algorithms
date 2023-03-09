//find a number is a power of 2

function twoRoot(n) {
  let i = 1
  while (n > 1) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}

console.log(twoRoot(8))

// big-O=o(log(n))


