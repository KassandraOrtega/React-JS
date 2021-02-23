import $, { get } from "jquery";

function showError(e){
    console.warn("Error", e);
}

function updateUI(info){
    $("#app").text(JSON.stringify(info));
}

function getLocationURL([city, state]){
    return `https://query.yahooapis.com/v1/public/yq1?q=sel`
}

const id = "tylermcginnis";

/* function getUser(id, onSuccess, onFailure){
    $.getJSON({
        url: `https://api.github.com/users/${id}`,
        success: onSuccess,
        error: onFailure,
    })
} */

function getUser(id){
    return new Promise((resolve, reject) => {
        $.getJSON({
            url: getLocationURL(user.location.split(",")),
            success: resolve,
            errror: reject,
        })
    })
}

/* function getWeather(user, onSuccess, onFailure){
    $.getJSON({
        url: getLocationURL(user.location.split(",")),
        success: onSuccess,
        errror: onFailure,
    })
} */

function getWeather(user){
    return new Promise((resolve, reject) => {
        $.getJSON({
            url: getLocationURL(user.location.split(",")),
            success(weather){
                resolve({
                    user,
                    weather: weather.query.results
                })
            },
            error: reject,
        })
    })
}

/* $("#btn").on("click", () => {
    getUser('tylermcginnis', (user) =>{
        getWeather(user, (weather) =>{
            updateUI({
                user,
                weather: weather.query.results,
            })
        })
    }, showError)
}); */

$("#btn").on("click", async () => {
    try{
        const user = await getUser('tylermcginnis')
        const weather = await getWeather(user)

        updateUI({
            user,
            weather
        })
    } catch(e) {
        showError(e)
    }


    /* getUser('tylermcginnis')
    .then(getWeather)
    .then((data) => updateUI(data))
    .catch(showError) */


    /* const userPromise = getUser('tylermcginnis')

    userPromise.then((user) => {
        const weatherPromise = getWeather(user)
        weatherPromise.then((weather) => {
            updateUI({
                user,
                weather: weather.query.results
            })
        })
        weatherPromise.catch(showError)
    })
    userPromise.catch(showError) */
});