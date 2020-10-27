import { secondIndex } from '../src/second-index';
import { describe, it } from 'mocha';
import { expect } from 'chai';

interface TestParameter {
    input: string;
    search: string;
    expected: number | undefined;
}

const testParameters : TestParameter[] = [
    { input: "sims", search: "s", expected: 3},
    { input: "find the river", search: "e", expected: 12},
    { input: "hi", search: " ", expected: undefined},
];


describe("Second index test", () => {
    testParameters.forEach(tp => {
        it(`should return '${tp.expected}' when given '${tp.input}' to search for ${tp.search}`, () => {
            expect(secondIndex(tp.input, tp.search)).to.be.equal(tp.expected);
        });
    });
});