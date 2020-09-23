import { removeAllBefore } from '../src/remove-all-before';
import { describe, it } from 'mocha';
import { expect } from 'chai';


interface TestParameters {
    input: number[];
    delimiter: number;
    expected: number[];
  }

  const testParameters : TestParameters[] = [
      { input: [1, 2, 3, 4, 5], delimiter: 3, expected: [3, 4, 5]},
      { input: [1, 1, 2, 2, 3, 3], delimiter: 2, expected: [2, 2, 3, 3]},
      { input: [1, 1, 2, 4, 2, 3, 4], delimiter: 2, expected: [2, 4, 2, 3, 4]},
      { input: [1, 1, 5, 6, 7], delimiter: 2, expected: [1, 1, 5, 6, 7]},
      { input: [], delimiter: 0, expected: []},
      { input: [7, 7, 7, 7, 7, 7, 7, 7, 7], delimiter: 7, expected: [7, 7, 7, 7, 7, 7, 7, 7, 7]},

  ];


describe("Remove All Before Test", () => {
    testParameters.forEach((tp: TestParameters) => {
        it(`Should return "${tp.expected}" when "${tp.input}" is inputted with delimiter ${tp.delimiter}.`, () => {
            expect(removeAllBefore(tp.input, tp.delimiter)).to.be.eql(tp.expected);
        });
    });
});
