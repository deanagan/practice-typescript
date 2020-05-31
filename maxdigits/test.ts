import assert from "assert";

function maxDigit(value: number): number {
    // Has to be es6. Otherwise downlevel iterator flag for es3/es5 comes to play
    return Number([...value.toString()].sort().pop());
}

console.log('Example:');
console.log(maxDigit(0));

// These "asserts" are used for self-checking
assert.equal(maxDigit(0), 0);
assert.equal(maxDigit(52), 5);
assert.equal(maxDigit(634), 6);
assert.equal(maxDigit(1), 1);
assert.equal(maxDigit(10000), 1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
