function getPromise(){
    return new Promise((resolve) => {
        setTimeoout(resolve, 2000)
    })
}

function logA(){
    console.log('A')
}

function logB(){
    console.log('B')
}

function logCAndThrow(){
    console.log('C')

    throw new Error()
}

function catchError(){
    console.log('Error!')
}

getPromise()
.then(logA)
.then(logB)
.then(logCAndThrow)
.catch(catchError)