function welcomeMsg(fName, lName, email){
    return "Hello, " + fName + " " + lName + ". The email you used to sign up is " + email
}
welcomeMsg('Tyler', 'McGinnis', 'tyler@tylermcginnis.com')

function welcomeMsg(fName, lName, email){
    return "Hello, " + fName + " " + lName + ". The email you used to sign up is \"" + email + "\""
}
welcomeMsg('Tyler', 'McGinnis', 'tyler@tylermcginnis.com')

function welcomeMsg(fName, lName, email){
    return `Hello, ${fName} ${lName}. The email you used to sign up is "${email}"`
}
welcomeMsg('Tyler', 'McGinnis', 'tyler@tylermcginnis.com')

function welcomeTemplate(fName, lName, email){
    return "<div>" + 
    "<h1>Hello, " + fName + " " + lName + ".</h1>" + 
    "<i>The email you used to sign up is \"" + email + "\"</i>" + 
    "</div>"
}
document.body.innerHTML = welcomeTemplate('Tyler', 'McGinnis', 'tyler@tylermcginnis.com')

function welcomeTemplate(fName, lName, email){
    return `
        <div> 
            <h1>Hello, ${fName} ${lName}.</h1>
            <i>The email you used to sign up is ${email}</i> 
        </div>
    `
}
document.body.innerHTML = welcomeTemplate('Tyler', 'McGinnis', 'tyler@tylermcginnis.com')
