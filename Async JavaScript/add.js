function add (x, y){
    return x + y
}

add(3, 5)

const me = add
me(4,5)

const you = add
you(1,2)

function addFive(x, addReference){
    return addReference(5, x)
}

addFive(10, add)

function higherOrderFunction(x, callback){
    return callback(5, x)
}

higherOrderFunction(10, add)