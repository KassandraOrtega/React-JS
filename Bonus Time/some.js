const ages = [6, 14, 12, 22, 13]

const hasAdultSupervision = ages.some((age) => {
  return age >= 21
})

const canRentCar = ages.some((age) => {
  return age >= 25
})

console.log(hasAdultSupervision) // true
console.log(canRentCar) // false