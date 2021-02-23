function getTweets(uid){
    return fetch('https://api.users.com/' + uid)
        .then(function (response){
            return response.json()
        })
        .then(function(response){
            return response.data
        })
        .then(function(tweets){
            return tweets.filter(function (tweet){
                return tweet.stars > 50
            })
        })
        .then(function(tweets){
            return tweets.filter(function (tweet){
                return tweets.rts > 50
            })
        })
}

// These functions do the same thing
function getTweets(uid){
    return fetch('https://api.users.com/' + uid)
        .then((response) => response.json())
        .then((response) => response.data)
        .then((tweets) => tweets.filter((tweet) => tweet.stars > 50))
        .then((tweets) => tweets.filter((tweet) => tweets.rts > 50))
}

// if the function only has one parameter, you can do this
function getTweets(uid){
    return fetch('https://api.users.com/' + uid)
        .then(response => response.json())
        .then(response => response.data)
        .then(tweets => tweets.filter(tweet => tweet.stars > 50))
        .then(tweets => tweets.filter(tweet => tweets.rts > 50))
}