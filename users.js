var users = ["Tyler", "Sarah", "Dan"]

function getUsers(){
    return users
}

APP.getUsers = getUsers

module.exports = {
    getUsers: getUsers
}

/* (function () {
    var users = ["Tyler", "Sarah", "Dan"]

    function getUsers(){
        return users
    }

    APP.getUsers = getUsers
})() */

/* function usersWrapper(){
    var users = ["Tyler", "Sarah", "Dan"]

    function getUsers(){
        return users
    }

    APP.getUsers = getUsers
}

usersWrapper() */