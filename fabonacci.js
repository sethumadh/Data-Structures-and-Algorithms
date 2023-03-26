

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


// const primenumber = (n) => {
//   if (n === 0) {
//     return ` division with zero not allowed`
//   }
//   for (let i = 2; i < Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false
//     }
//   }
//   return true
// }
// console.log(primenumber(10))

//find a number is a power of 2

    // function twoRoot(n) {
    //   let i = 1
    //   while (n > 1) {
    //     if (n % 2 !== 0) {
    //       return false
    //     }
    //     n = n / 2
    //   }
    //   return true
    // }

    // console.log(twoRoot(8))
