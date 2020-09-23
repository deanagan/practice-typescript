

function replaceFirst(values: number[]): number[] {
    return values.length > 0 ? values.slice(1).concat(values[0]) : [];
}

// assert.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
// assert.deepEqual(replaceFirst([1]), [1]);
// assert.deepEqual(replaceFirst([]), []);
