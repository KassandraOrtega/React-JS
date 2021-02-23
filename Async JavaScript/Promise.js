// How do you create a Promise?
// How do you chnage the status of a promise?
// How do you listen for when the status of a promise changes?

const promise = new Promise()

function onSuccess(){
    console.log('Success!')
}

function onError(){
    console.log('Error')
}

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve() // fulfilled)
        // reject() // rejected
    }, 2000)
})

promise.then(onSuccess)
promise.catch(onError)