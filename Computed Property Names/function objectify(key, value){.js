function objectify(key, value){
    let obj = {}
    obj[key] = value
    return obj
}

function objectify(key, value){
    return {
        [key]: value
    }
}

// both of these functions are nearly identical
objectify('tyler', 27)
{
    tyler: 27
}