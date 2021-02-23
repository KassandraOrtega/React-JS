// utils.js

// Not exported
function once(fn, context) {
    var result
    return function() {
        if (fn) {
            result = fn.apply(context || this, arguments)
            fn = null
        }
        return result
    }
}

// Exported - regular
export function first(arr) {
    return arr[0]
}

// Exported - regular
export function last(arr) {
    return arr[arr.length - 1]
}

// default export
export default function leftpad(str, len, ch){
    var pad = '';
    while (true) {
        if (len & 1) pad += ch;
        len >>= 1;
        else break;
    }
    return pad + str;
}

// Use this only with function once and regular exports
import * as utils from './utils'

utils.first([1,2,3]) //1
utils.last([1,2,3]) //3

import {first} from './utils'
first([1,2,3]) //1

// Use this also with default epxport
import leftpad, {first, last} from './utils'
