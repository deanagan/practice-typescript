import assert from "assert";

function endZeros(value: number): number {
    let endZeroCount = 0;
    let valueStr = value.toString();

    for (let i = 0; i < valueStr.length; i++) {
        if (valueStr[i] === '0') {
            endZeroCount++;
        } else {
            endZeroCount = 0;
        }
    }

    return endZeroCount;
}

console.log('Example:');
console.log(endZeros(0));

// These "asserts" are used for self-checking
assert.equal(endZeros(0), 1);
assert.equal(endZeros(1), 0);
assert.equal(endZeros(10), 1);
assert.equal(endZeros(101), 0);
assert.equal(endZeros(245), 0);
assert.equal(endZeros(100100), 2);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
