const tweets = [
  { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
  { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
  { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
  { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
]

const tweetIds = tweets.map((tweet) => tweet.id) // [1,2,3,4]

render () {
  return (
    <ul>
      {this.state.todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>
      })}
    </ul>
  )
}