"use strict";
function backwardString(value) {
    // spread operator requires es6 or es2015
    // alternatively, we can say value.split('').reverse().join('');
    return [...value].reverse().join('');
}
//console.log.log('Example:');
//console.log.log(backwardString('val'));
// // These "asserts" are used for self-checking
//assert.equal.equal(backwardString('val'), 'lav');
//assert.equal.equal(backwardString(''), '');
//assert.equal.equal(backwardString('ohho'), 'ohho');
//assert.equal.equal(backwardString('123456789'), '987654321');
