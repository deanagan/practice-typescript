import { sumByType } from '../src/sum-by-type';
import { expect } from 'chai';
import { describe, it } from 'mocha';


interface TestParameter {
    input: Array<number | string>;
    expected: [string, number];
}

const testParameters : TestParameter[] = [
    { input: [],  expected: ['', 0]},
    { input: [1, 2, 3],  expected: ['', 6]},
    { input: ['1', 2, 3],  expected: ['1', 5]},
    { input: ['1', '2', 3],  expected: ['12', 3]},
    { input: ['1', '2', '3'], expected:  ['123', 0]},
    { input: ['size', 12, 'in', 45, 0], expected:  ['sizein', 57]},
];

describe('Sum by types', () => {
    testParameters.forEach((testParameter) => {
        it(`should return '${testParameter.expected}' when given '${testParameter.input}'`, () => {
            expect(sumByType(testParameter.input)).to.be.eql(testParameter.expected);
        });
    });
});
