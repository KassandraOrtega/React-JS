const friends = ['Jake', 'Jacob', 'Mikenzi', 'Alex']
friends.sort()

console.log(friends) // ["Alex", "Jacob", "Jake", "Mikenzi"]

const ages = [21, 19, 35, 38, 18, 23]
ages.sort((a,b) => a - b)

console.log(ages) // [18, 19, 21, 23, 35, 38]

const users = [
  { name: 'Jim', age: 28 },
  { name: 'Alex', age: 32 },
  { name: 'Mikenzi', age: 26 },
  { name: 'Christina', age: 42 },
]

users.sort((a,b) => a.age - b.age)

users.sort((a, b) => a.name > b.name)