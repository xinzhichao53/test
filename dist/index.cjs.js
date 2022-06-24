'use strict';

function numAdd(value) {
    value += 1;
    return value;
}function NumRe(value) {
    if (value > 0) {
        value -= 1;
    }
    return value;
}

// import { version } from '../package.json';
// export default function test1() {
//   console.log('version：' + version );
// }
var main = {
  numAdd,
  NumRe
};

module.exports = main;
