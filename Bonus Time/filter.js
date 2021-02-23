const tweets = [
  { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
  { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
  { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
  { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
]

const popularTweets = tweets.filter((tweet) => {
  return tweet.stars > 50
})

removeItem(index) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((item, i) => i !== index)
    }))
  }