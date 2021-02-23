const ages = [22,27,29]

ages.unshift(20) // 4
console.log(ages) // [20,22,27,29]

const ages = [22,27,29]
const newAges = [20].concat(ages)

console.log(ages) // [22,27,29]
console.log(newAges) // [20,22,27,29]
const ages = [22,27,29]
const newAges = [20, ...ages]

console.log(ages) // [22,27,29]
console.log(newAges) // [20,22,27,29]