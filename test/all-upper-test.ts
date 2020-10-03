import { isAllUpper } from '../src/all-upper';
import { describe, it, Test } from 'mocha';
import { expect } from 'chai';



interface TestParameter {
    input: string;
    expected: boolean;
}

const testParameters : TestParameter[] = [
    {input: 'ALL UPPER', expected: true},
    {input: 'all lower', expected: false},
    {input: 'mixed UPPER and lower', expected: false},
    {input: '', expected: true},
];




describe('All upper Test', () => {
    testParameters.forEach((tp) => {
        it(`should return '${tp.expected}' when give input '${tp.input}'`, () => {
            expect(isAllUpper(tp.input)).to.equal(tp.expected);
        });
    });

});
