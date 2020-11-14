import { absoluteSorting } from '../src/absolute-sorting';
import { it, describe } from 'mocha';
import { expect } from 'chai';



interface TestParameter {
    input: number[];
    expected: number[];
}

const testParameters: TestParameter[] = [
    { input: [-20, -5, 10, 15], expected: [-5, 10, 15, -20]},
    { input: [1, 2, 3, 0], expected: [0, 1, 2, 3]},
    { input: [-1, -2, -3, 0], expected: [0, -1, -2, -3]},
];

describe('Absolute sorting test', () => {
    testParameters.forEach((tp) => {
        it(`should return '${tp.expected}' when given '${tp.input}'`, () => {
            expect(absoluteSorting(tp.input)).to.be.eql(tp.expected);
        })
    });
});
