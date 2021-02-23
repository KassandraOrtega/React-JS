const friends = ['Jake', 'Karl', 'Mikenzi']

const removedItems = friends.splice(1, 1, 'Jordyn')
// Start at index 1, remove 1 item then add Jordyn

console.log(removedItems) // ['Karl']
console.log(friends) // ['Jake', 'Jordyn', 'Mikenzi']