import { sumByType } from '../src/sum-by-type';
import { expect } from 'chai';
import { describe, it } from 'mocha';


interface TestParameter {
    input: Array<number | string>;
    expected: [string, number];
}

const testParameters : TestParameter[] = [
    { input: [],  expected: ['', 0]},
];

describe('Sum by types', () => {
    testParameters.forEach((testParameter) => {
        it(`should return '${testParameter.expected}' when given '${testParameter.input}'`, () => {
            expect(sumByType(testParameter.input)).to.be.eql(testParameter.expected);
        });
    });
});
