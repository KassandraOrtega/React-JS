function sum (arr) {
  return arr.reduce((total, num) => {
    return total + num
  }, 0)
}

sum([1,2,3]) // 6
sum([5,5,5]) // 15

function sum (arr) {
  return arr.reduce((total, num) => {
    console.log(num)
  }, 0)
}

sum([1,2,3])
// 1
// 2
// 3

function sum (arr) {
  return arr.reduce((total, num) => {
    console.log(total)
    return Date.now()
  }, 0)
}

sum([1,2,3])

function sum (arr) {
  return arr.reduce((total, num) => {
    return total + num
  }, 0)
}

sum([1,2,3])

function getUserData (users) {
  return users.reduce(() => {

  }, { users: 0, ageTotal: 0 })
}

function getUserData (users) {
  return users.reduce((data, user) => {
    data.users += 1
    data.ageTotal += user.age

    return data
  }, { users: 0, ageTotal: 0 })
}

const users = [
 { name: 'Tyler', age: 28},
 { name: 'Mikenzi', age: 26},
 { name: 'Blaine', age: 30 }
]

getUserData(users) // { users: 3, ageTotal: 84 }