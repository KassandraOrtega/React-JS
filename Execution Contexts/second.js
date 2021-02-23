function getUser(id, onSuccess, onFailure) {
    $.getJSON({
        url: `http://api.github.com/users/${id}`,
        success: onSuccess,
        error: onFailure
    })
}

function getWeather(user, onSuccess, onFailure) {
    $.getJSON({
        url: getLocationURL(user.location.split(',')),
        success: onSuccess,
        error: onSuccess,
    })
}

const id = 'tylermcginnis'

$("#btn").on("click", () => {
    getUser("tylermcginnis", (user) => {
        getWeather(user, (weather) => {
            updateUI({
                user,
                weather: weather.query.results
            })
        }, showError)
    }, showError)
})