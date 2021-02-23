// leftpad.js

export default function leftpad(str, len, ch) {
    var pad = '';
    while (true) {
        if (len & 1) pad += ch;
        len >>= 1;
        else break;
    }
    return pad + str;
}

import leftpad from './leftpad'
