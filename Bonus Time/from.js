function sumArgs() {
  console.log(arguments)
  return arguments
    .reduce((total, ele) =>
      total + ele,
      0
    ) // Error!
}

sumArgs(1,2,3,4,5) // [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.

function sumArgs() {
  return Array.from(arguments)
    .reduce((total, ele) => total + ele, 0)
}

sumArgs(1,2,3) // 6