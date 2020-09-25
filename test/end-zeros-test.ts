import { endZeros } from "../src/end-zeros";
import { describe, it } from "mocha";

import { expect } from "chai";

interface TestParameters {
  input: number;
  expected: number;
}

const testParameters : TestParameters[] = [
  {input: 0, expected: 1},
  {input: 1, expected: 0},
  {input: 10, expected: 1},
  {input: 101, expected: 0},
  {input: 245, expected: 0},
  {input: 100100, expected: 2},
];


describe("End Zeros Test", () => {
  testParameters.forEach((tp: TestParameters) => {
    it(`Should return ${tp.expected} when ${tp.input} is inputted.`, () => {
      expect(endZeros(tp.input)).to.be.equal(tp.expected);
    });
  });
});
