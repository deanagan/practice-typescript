"use strict";
function isAllUpper(text) {
    //return [...text].every(ch => ch == ch.toUpperCase() || ch.match(/^[\d|\s]$/));
    return text == text.toUpperCase();
}
//console.log.log('Example:');
//console.log.log(isAllUpper('ALL UPPER'));
// // These "asserts" are used for self-checking
//assert.equal.equal(isAllUpper('ALL UPPER'), true);
//assert.equal.equal(isAllUpper('all lower'), false);
//assert.equal.equal(isAllUpper('mixed UPPER and lower'), false);
//assert.equal.equal(isAllUpper(''), true);
