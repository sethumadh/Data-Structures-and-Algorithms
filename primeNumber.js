const primenumber = (n) => {
  if (n === 0) {
    return ` division with zero not allowed`
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
console.log(primenumber(10))