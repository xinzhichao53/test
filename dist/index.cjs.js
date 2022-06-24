'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function numAdd(value) {
    value += 1;
    return value;
}function NumRe(value) {
    if (value > 0) {
        value -= 1;
    }
    return value;
}

exports.NumRe = NumRe;
exports.numAdd = numAdd;
