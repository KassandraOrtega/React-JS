const oldFriends = ['Jake', 'Mikenzi', 'Jessica']
const newFriends = ['Merrick', 'Cash']

const friends = oldFriends.concat(newFriends)

addFriend(friend) {
  this.setState((prevState) => ({
    friends: prevState.concat([friend])
  }))
}