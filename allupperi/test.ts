import assert from "assert";

function isAllUpper(text: string): boolean {
    //return [...text].every(ch => ch == ch.toUpperCase() || ch.match(/^[\d|\s]$/));
    return text == text.toUpperCase();
}

console.log('Example:');
console.log(isAllUpper('ALL UPPER'));

// These "asserts" are used for self-checking
assert.equal(isAllUpper('ALL UPPER'), true);
assert.equal(isAllUpper('all lower'), false);
assert.equal(isAllUpper('mixed UPPER and lower'), false);
assert.equal(isAllUpper(''), true);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
