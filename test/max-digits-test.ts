import { maxDigit } from '../src/max-digits';
import { describe, it } from 'mocha';
import { expect } from 'chai';



interface TestParameter {
    input: number;
    expected: number;
}

const testParameters: TestParameter[] = [
    { input: 0, expected: 0},
    { input: 52, expected: 5},
    { input: 634, expected: 6},
    { input: 1, expected: 1},
    { input: 10000, expected: 1},
];


describe("Test max digits", () => {
    testParameters.forEach((tp) => {
        it(`maxDigit should return ${tp.expected} when give ${tp.input}`, () => {
            expect(maxDigit(tp.input)).to.be.equal(tp.expected);
        });
    });
});
