function add(x, y){
    return x + y
}

console.log(`Call to add: ${add(3,5)}`)

const me = add
console.log(`Call to me: ${me(4,5)}`)

const you = add
console.log(`Call to you: ${you(1,2)}`)


function addFive(x, addReference){
    return addReference(5, x)
}

console.log(addFive(10, add))

function higherOrderFunction (x, callback){
    return callback(5, x)
}

console.log(higherOrderFunction(10, add))