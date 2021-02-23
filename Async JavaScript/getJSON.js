const id = 'tylermcginnis'

$.getJSON({
    url: `https://api.github.com/users/${id}`,
    success: updateUI,
    error: showError,
})