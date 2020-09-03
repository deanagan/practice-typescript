"use strict";
function splitPairs(text) {
    if (text.length % 2) {
        text = [...text].concat('_').join('');
    }
    // slow but convenient
    return text.split(/(.{1,2})/).filter(empty => empty);
}
//console.log('Example:');
//console.log(splitPairs('abcd'));
// These "asserts" are used for self-checking
// assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
// assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
// assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
// assert.deepEqual(splitPairs('a'), ['a_']);
// assert.deepEqual(splitPairs(''), []);
