import { backwardString } from '../src/backward-string';
import { describe, it } from 'mocha';
import { expect } from 'chai';


interface TestParameter {
    input: string;
    expected: string;
}

const testParameters : TestParameter[] = [
    { input: 'val', expected:  'lav'},
    { input: '', expected:  ''},
    { input: 'ohho', expected:  'ohho'},
    { input: '123456789', expected:  '987654321'},
];

describe('Backward string test', () => {
    testParameters.forEach((tp) => {
        it(`should return '${tp.expected}' when given '${tp.input}'`, () => {
            expect(backwardString(tp.input)).to.be.equal(tp.expected);
        });
    });
});
