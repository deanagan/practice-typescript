// Sort the given iterable so that its elements end up in the decreasing frequency order, that is, the number of times
// they appear in elements. If two elements have the same frequency, they should end up in the same order as the first appearance in the iterable.

import { getSortedElementFrequency } from '../src/sort-array-by-element-frequency';
import { describe, it } from 'mocha';
import { expect } from 'chai';

interface TestParameter {
    input: any[];
    expected: any[];
}

const testParameters : TestParameter[] = [
    { input: [4, 6, 2, 2, 6, 4, 4, 4], expected: [4, 4, 4, 4, 6, 6, 2, 2]},
    { input: ['bob', 'bob', 'carl', 'alex', 'bob'], expected: ['bob', 'bob', 'bob', 'carl', 'alex']},
    { input: [17, 99, 42], expected: [17, 99, 42]}
];


describe("Sorted by frequency test", () => {
    testParameters.forEach(tp => {
        it(`should return '${tp.expected}' when given '${tp.input}'`, () => {
            expect(getSortedElementFrequency(tp.input)).to.be.eql(tp.expected);
        });
    });
});