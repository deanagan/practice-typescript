import { secondIndex } from '../src/second-index';
import { describe, it } from 'mocha';
import { expect } from 'chai';

interface TestParameter {
    input: string;
    search: string;
    expected: number;
}

const testParameters : TestParameter[] = [
    { input: "sims", search: "s", expected: 3},

];


describe("Second index test", () => {
    testParameters.forEach(tp => {
        it(`should return '${tp.expected}' when given '${tp.input}' to search for ${tp.search}`, () => {
            expect(secondIndex(tp.input, tp.search)).to.be.equal(tp.expected);
        });
    });
});