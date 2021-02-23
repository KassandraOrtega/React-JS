var getUsers = require('./users').getUsers

function addUserToDOM(name){
    const node = document.createElement("li")
    const text = document.createTextNode(name)
    node.appendChild(text)

    document.getElementById("users")
        .appendChild(node)
}

document.getElementById("submit")
    .addEventListener("click", function() {
        var input = document.getElementById("input")
        addUserToDOM(input.value)

        input.value = " "
    })

var users = getUsers()
for (var i = 0; i < users.length; i++) {
    addUserToDOM(users[i])
}

// Use IF-EE 
/* (function(){
    function addUserToDOM(name){
        const node = document.createElement("li")
        const text = document.createTextNode(name)
        node.appendChild(text)

        document.getElementById("users")
            .appendChild(node)
    }

    document.getElementById("submit")
        .addEventListener("click", function() {
            var input = document.getElementById("input")
            addUserToDOM(input.value)

            input.value = " "
        })

    var users = APP.getUsers()
    for (var i = 0; i < users.length; i++) {
        addUserToDOM(users[i])
    }
})() */

//Regular statement
/* function domWrapper(){    
    function addUserToDOM(name){
        const node = document.createElement("li")
        const text = document.createTextNode(name)
        node.appendChild(text)

        document.getElementById("users")
            .appendChild(node)
    }

    document.getElementById("submit")
        .addEventListener("click", function() {
            var input = document.getElementById("input")
            addUserToDOM(input.value)

            input.value = " "
        })

    var users = APP.getUsers()
    for (var i = 0; i < users.length; i++) {
        addUserToDOM(users[i])
    }
}

domWrapper() */