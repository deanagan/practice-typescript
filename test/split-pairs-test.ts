import { splitPairs } from '../src/split-pairs';
import { describe, it, Test } from 'mocha';
import { expect } from 'chai';


interface TestParameter {
    input: string;
    expected: string[];
}

const testParameters : TestParameter[] = [
    { input: 'abcd', expected: ['ab', 'cd'] },
    { input: 'abc', expected: ['ab', 'c_'] },
    { input: 'abcdf', expected: ['ab', 'cd', 'f_'] },
    { input: 'a', expected: ['a_'] },
    { input: '', expected: [] },
]


describe('Split pairs test', () => {
    testParameters.forEach((testParameter) => {
        it(`should return '${testParameter.expected}' when given '${testParameter.input}'`, () => {
            expect(splitPairs(testParameter.input)).to.be.eql(testParameter.expected);
        });
    });
});