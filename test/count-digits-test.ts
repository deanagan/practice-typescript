import { countDigits } from '../src/count-digits';
import { describe, it } from 'mocha';
import { expect } from 'chai';


interface TestParameters {
    input: string;
    expected: number;
  }

  const testParameters : TestParameters[] = [
      { input: "hi", expected: 0},
      { input: "who is 1st here", expected: 1},
      { input: "my numbers is 2", expected: 1},
      { input: "This picture is an oil on canvas "
      + "painting by Danish artist Anna "
      + "Petersen between 1845 and 1910 year", expected: 8},
      { input: "5 plus 6 is", expected: 2},
      { input: "", expected: 0},
  ];


describe("Count Digits Test", () => {
    testParameters.forEach((tp: TestParameters) => {
        it(`Should return "${tp.expected}" when "${tp.input}" is inputted.`, () => {
            expect(countDigits(tp.input)).to.be.equal(tp.expected);
        });
    });
});
