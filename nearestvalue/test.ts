import assert from "assert";

function nearestValue(values: number[], search: number): number {
    let nearestValue = values[0];

    for (let i = 1; i < values.length; i++) {
        let curr = Math.abs(nearestValue - search);
        let cand = Math.abs(search - values[i]);
        if (curr > cand) {
            nearestValue = values[i];
        } else if (curr == cand) {
            nearestValue = Math.min(nearestValue,values[i]);
        }
    }

    return nearestValue;
}

console.log('Example:');
console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));

// These "asserts" are used for self-checking
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
assert.equal(nearestValue([-1, 2, 3], 0), -1);
assert.equal(nearestValue([0,-2], -1), -2);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
