import { splitList } from '../src/split-list';
import { describe, it } from 'mocha';
import { expect } from 'chai';

interface TestParameter {
    input: number[];
    expected: number[][];
}

const testParameters : TestParameter[] = [
    { input: [1, 2, 3, 4, 5, 6], expected: [[1, 2, 3], [4, 5, 6]]},
    { input: [1, 2, 3], expected: [[1, 2], [3]]},
    { input: [1, 2, 3, 4, 5], expected: [[1, 2, 3], [4, 5]]},
    { input: [1], expected: [[1], []]},
    { input: [], expected: [[], []]},
];


describe("Split list test", () => {
    testParameters.forEach(tp => {
        it(`should return '${tp.expected}' when given '${tp.input}'`, () => {
            expect(splitList(tp.input)).to.be.eql(tp.expected);
        });
    });
});