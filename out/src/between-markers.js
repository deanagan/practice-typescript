"use strict";
function betweenMarkers(line, left, right) {
    return line.slice(line.indexOf(left) + 1, line.indexOf(right));
}
//console.log('Example:');
//console.log(betweenMarkers('What is >apple<', '>', '<'));
// These "asserts" are used for self-checking
//assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
//assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple');
//assert.equal(betweenMarkers('What is ><', '>', '<'), '');
//assert.equal(betweenMarkers('[an apple]', '[', ']'), 'an apple');
